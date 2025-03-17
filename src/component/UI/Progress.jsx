export default function Progress({ width, value = 100 }) {
  return (
    <div style={{ width: '100%' }}>
      <div className="progress progress-line">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${width}%`, backgroundColor: 'var(--color-main-deep)' }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {value} %
        </div>
      </div>
    </div>
  );
}
