export const delay = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
export const exists = (v: any) => typeof v !== 'undefined';
export const isArray = (a: any) => Array.isArray(a);
export const isString = (s: any) => typeof s === 'string';
export const isInteger = (n: any) => Number.isInteger(n);
export const isObject = (o: any) => typeof o === 'object' && o !== null;
export const isObjectEmpty = (o: { [s: string]: unknown } | ArrayLike<unknown>) =>
  Object.entries(o).length === 0 && o.constructor === Object;
export const uniqArr = (arr: any[]) => [...new Set(arr)];
