import type { ReactNode } from 'react';
import type { Cn } from '~/utils/types';
import classNames from 'classnames';

export interface ContainerProps {
  children: ReactNode;
  className?: Cn;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={classNames('container mx-auto pt-4 px-4 md:px-0', className)}>{children}</div>;
}
