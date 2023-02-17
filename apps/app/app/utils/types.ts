import type { HTMLAttributes } from 'react';

export type Cn<T = HTMLDivElement> = HTMLAttributes<T>['className'];
export interface ExtClassName<T = HTMLDivElement> {
  className?: Cn<T>;
}
