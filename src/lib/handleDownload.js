import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { enqueueSnackbar } from 'notistack';

export const handleDownload = async (ref, name, deviceInfo) => {
  if (!ref.current) return;

  const { isIOS, isAOS } = deviceInfo;

  try {
    const div = ref.current;
    const canvas = await html2canvas(div, { scale: 2 });
    const fileName = `${name}.png`;

    canvas.toBlob(async blob => {
      if (blob !== null) {
        if (isIOS && navigator.share) {
          const idx = fileName.lastIndexOf('.');
          const etc = fileName.slice(idx + 1);
          const file = new File([blob], fileName, { type: `image/${etc}` });
          await saveImageToGalleryWithShare(file, name);
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
    enqueueSnackbar('이미지가 저장 되었습니다!');
  } catch {
    enqueueSnackbar('이미지가 저장에 실패했습니다', { variant: 'error' });
  }
};

const saveImageToGalleryWithShare = async (file, fileName) => {
  try {
    const shareObj = { title: '검사 결과 저장', text: fileName, files: [file] };
    if (navigator.canShare(shareObj)) {
      await navigator.share(shareObj);
    }
  } catch (error) {
    console.error('Error sharing image:', error);
  }
};
