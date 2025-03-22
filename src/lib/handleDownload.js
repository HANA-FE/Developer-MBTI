import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { enqueueSnackbar } from 'notistack';

const IMAGE_ETC = '.png';

export const saveImageWithShare = async shareObj => {
  try {
    await navigator.share(shareObj);
  } catch (error) {
    console.error('Error sharing image:', error);
  }
};

export const componentToImage = async ref => {
  if (!ref.current) return;

  let canvas;
  try {
    const div = ref.current;

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

    canvas = await html2canvas(div, { scale: 2 });
    style.remove();
  } catch (e) {
    console.log(e, 'html2canvas Error');
  }

  return canvas;
};

export const handleDownload = async (ref, name, deviceInfo) => {
  const { isIOS, isAOS, isChrome, isNaver } = deviceInfo;
  const fileName = `${name}${IMAGE_ETC}`;

  try {
    const canvas = await componentToImage(ref);
    canvas.toBlob(async blob => {
      if (blob !== null) {
        const file = new File([blob], fileName, { type: `image/${IMAGE_ETC}` });
        const shareObj = { title: '검사 결과 저장', text: fileName, files: [file] };

        if (isIOS && !isChrome && !isNaver && navigator.share && navigator.canShare(shareObj)) {
          await saveImageWithShare(shareObj);
        } else if (isAOS) {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          link.click();
          URL.revokeObjectURL(link.href);
        } else {
          saveAs(blob, fileName);
        }
      }
    });
  } catch {
    enqueueSnackbar('이미지 저장에 실패했습니다', { variant: 'error' });
  }
};
