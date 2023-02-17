import Nav from './Nav';
import type { ContainerProps } from './Container';
import Container from './Container';
import type { Cn } from '~/utils/types';
import Footer from './Footer';
import classNames from 'classnames';

export default function Page({ children, className, pageClassName }: ContainerProps & { pageClassName?: Cn }) {
  return (
    <div
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
      className={classNames('h-screen flex flex-col justify-between', pageClassName)}
    >
      <Nav />
      <Container className={classNames('mb-auto', className)}>{children}</Container>
      <Footer />
    </div>
  );
}
