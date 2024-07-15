export default function segment(pathname: string) {
    return pathname.split('/').filter(Boolean);
  }