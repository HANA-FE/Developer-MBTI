import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { enqueueSnackbar } from 'notistack';

export const handleDownload = async (ref, name) => {
  if (!ref.current) return;

  try {
    const div = ref.current;
    const canvas = await html2canvas(div, { scale: 2 });

    canvas.toBlob(blob => {
      if (blob !== null) {
        saveAs(blob, `${name}_result.png`);
      }
    });
    enqueueSnackbar('이미지가 저장 되었습니다!');
  } catch {
    enqueueSnackbar('이미지가 저장에 실패했습니다', { variant: 'error' });
  }
};
