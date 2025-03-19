import { enqueueSnackbar } from 'notistack';

export function copyToClipboard(string) {
  try {
    const el = document.createElement('textarea');
    el.value = string;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(el);
    enqueueSnackbar('URL이 복사되었습니다!');
  } catch {
    enqueueSnackbar('복사에 실패했습니다', { variant: 'error' });
  }
}
