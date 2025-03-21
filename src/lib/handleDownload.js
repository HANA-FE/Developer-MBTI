import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { enqueueSnackbar } from 'notistack';

const IMAGE_ETC = '.png';

export const handleDownload = async (ref, name, deviceInfo) => {
  if (!ref.current) return;

  const { isIOS, isAOS } = deviceInfo;

  try {
    const div = ref.current;
    const canvas = await html2canvas(div, { scale: 2 });
    const fileName = `${name}${IMAGE_ETC}`;

    canvas.toBlob(async blob => {
      if (blob !== null) {
        const file = new File([blob], fileName, { type: `image/${IMAGE_ETC}` });
        const shareObj = { title: '검사 결과 저장', text: fileName, files: [file] };

        if (isIOS && navigator.share && navigator.canShare(shareObj)) {
          await saveImageToGalleryWithShare(shareObj);
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

const saveImageToGalleryWithShare = async shareObj => {
  try {
    await navigator.share(shareObj);
  } catch (error) {
    console.error('Error sharing image:', error);
  }
};
