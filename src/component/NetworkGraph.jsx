import * as d3 from 'd3';
import { drag as d3drag } from 'd3';
import { useEffect, useRef } from 'react';
import { NODES, LINKS } from '../constant/animals';

const ROTATION_SPEED = 0.0006;

export default function NetworkGraph() {
  const divRef = useRef(null);
  const svgRef = useRef(null);
  const angle = useRef(0);

  // NOTE 드래그 이벤트 핸들러
  const createDragHandler = (simulation, width, height) => {
    return d3drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = Math.max(50, Math.min(width - 50, event.x));
        d.fy = Math.max(20, Math.min(height - 20, event.y));
      })
      .on('end', event => {
        if (!event.active) simulation.alphaTarget(0);
      });
  };

  // NOTE 포스 시뮬레이션 설정
  const createSimulation = (width, height) => {
    const centerX = width / 2;
    const centerY = height / 2;
    return d3
      .forceSimulation(NODES)
      .force(
        'link',
        d3
          .forceLink(LINKS)
          .id(d => d.id)
          .distance(100)
          .strength(0.1)
      )
      .force('charge', d3.forceManyBody().strength(-80))
      .force('center', d3.forceCenter(centerX, centerY))
      .force('collide', d3.forceCollide().radius(Math.min(window.innerWidth, 100)))
      .force('radial', d3.forceRadial(0, centerX, centerY));
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const centerX = width / 2;
    const centerY = height / 2;
    const starColors = [
      '#e4e6e7', // 거의 흰색
    ];

    // NOTE 노드들을 원의 중심에서 시작하도록 초기 위치 설정
    NODES.forEach(node => {
      node.x = centerX;
      node.y = centerY;
    });

    // NOTE 기존 그래프 내용 클리어
    svg.selectAll('*').remove();

    // NOTE 색 및 그라데이션 설정
    const defs = svg.append('defs');

    starColors.forEach((color, index) => {
      const gradientId = `gradient-${index}`;
      const gradient = defs
        .append('linearGradient')
        .attr('id', gradientId)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '100%');

      gradient.append('stop').attr('offset', '0%').attr('stop-color', d3.color(color).brighter(1).toString());
      gradient.append('stop').attr('offset', '100%').attr('stop-color', d3.color(color).darker(1).toString());
    });

    // NOTE 포스 시뮬레이션 설정
    const simulation = createSimulation(width, height);

    const updateGraphSize = () => {
      const { innerHeight } = window;
      let [width, height] = [divRef.current.offsetWidth, Math.min(500, innerHeight)];
      svg.attr('width', width).attr('height', height);

      const newCenterX = width / 2;
      const newCenterY = height / 1.7;

      simulation.force('center', d3.forceCenter(newCenterX, newCenterY));
      simulation.alphaTarget(0.3).restart();
    };

    // NOTE 뷰포트 크기 변경 시 그래프 크기 업데이트
    window.addEventListener('resize', updateGraphSize);
    updateGraphSize();

    // NOTE 드래그 기능을 위한 함수
    const drag = createDragHandler(simulation, width, height);

    // NOTE 링크와 노드 요소 추가
    const link = svg
      .append('g')
      .attr('stroke', '#Fff')
      .attr('stroke-opacity', 0.2)
      .selectAll('line')
      .data(LINKS)
      .join('line');

    const node = svg
      .append('g')
      .selectAll('text')
      .data(NODES)
      .join('text')
      .attr('x', d => d.x ?? 0)
      .attr('y', d => d.y ?? 0)
      .text(d => d.id)
      .style('font-size', '0.875rem')
      .style('fill', '#d9d9d9')
      .style('cursor', 'pointer')
      .attr('text-anchor', 'middle')
      .call(drag);

    // NOTE 시뮬레이션 갱신 시 링크와 노드의 위치 업데이트
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x ?? 0)
        .attr('y1', d => d.source.y ?? 0)
        .attr('x2', d => d.target.x ?? 0)
        .attr('y2', d => d.target.y ?? 0);
      node.attr('x', d => d.x ?? 0).attr('y', d => d.y ?? 0);
    });

    // NOTE 회전하는 애니메이션
    const rotateGraph = () => {
      angle.current += ROTATION_SPEED;

      NODES.forEach((node, i) => {
        const radius = 150; // 원의 반지름
        const currentAngle = angle.current + (i * (Math.PI * 2)) / NODES.length;
        node.x = centerX + radius * Math.cos(currentAngle);
        node.y = centerY + radius * Math.sin(currentAngle);
      });

      simulation.nodes(NODES);
      simulation.alpha(1).restart();

      requestAnimationFrame(rotateGraph);
    };

    rotateGraph();
    return () => {
      window.removeEventListener('resize', updateGraphSize);
      svg.selectAll('*').remove();
    };
  }, []);

  return (
    <div style={{ width: '100%' }} ref={divRef}>
      <svg ref={svgRef} />
    </div>
  );
}
