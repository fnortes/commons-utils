/**
 * Check if the current browser is the new or old IE.
 * @returns True if the browser is the new or old IE. Else False.
 */
export const isIe = (): boolean => {
  const ua: string = window.navigator.userAgent;

  const oldIe: number = ua.indexOf('MSIE ');
  const newIe: number = ua.indexOf('Trident/');

  return oldIe > -1 || newIe > -1;
};

/**
 * Check if the current browser is the new Edge.
 * @returns True if the browser is the new Edge. Else False.
 */
export const isEdge = (): boolean => !isIe() && Boolean(window.StyleMedia);
