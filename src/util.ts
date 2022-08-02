export function getCanonicalURL(host: string, path: string): string {
  return 'https://' + host + path.replace(/^\/+/, '').replace(/\/+$/, '');
}

export function getCurrentPageSlug(currentPage: string): string {
  return currentPage.slice(1).split('/')[0];
}
