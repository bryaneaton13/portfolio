import type { ReactNode } from 'react';
import classNames from 'classnames';
import type { Cn } from '~/utils/types';

type Colors = 'green' | 'blue' | 'red' | 'purple' | 'orange' | 'indigo';

export default function Title({
  text,
  size,
  color1 = 'green',
  color2 = 'blue',
  className,
}: {
  text: string | ReactNode;
  color1?: Colors;
  color2?: Colors;
  size?: 'sm' | 'md' | 'lg';
  className?: Cn;
}) {
  return (
    <h1
      className={classNames(
        'animate-move-bg bg-gradient-to-r bg-[length:400%] bg-clip-text font-bold text-transparent',
        {
          'text-7xl': !size,
          'text-4xl': size === 'lg',
          'text-2xl': size === 'md',
          'text-xl': size === 'sm',
        },
        {
          'from-green-500 to-green-500': color1 === 'green',
          'from-blue-500 to-blue-500': color1 === 'blue',
          'from-red-500 to-red-500': color1 === 'red',
          'from-purple-500 to-purple-500': color1 === 'purple',
          'from-orange-500 to-orange-500': color1 === 'orange',
          'from-indigo-500 to-indigo-500': color1 === 'indigo',
        },
        {
          'via-green-500': color2 === 'green',
          'via-blue-500': color2 === 'blue',
          'via-red-500': color2 === 'red',
          'via-purple-500': color2 === 'purple',
          'via-orange-500': color2 === 'orange',
          'via-indigo-500': color2 === 'indigo',
        },
        className,
      )}
    >
      {text}
    </h1>
  );
}
