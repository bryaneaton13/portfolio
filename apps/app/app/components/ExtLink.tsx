/* eslint-disable jsx-a11y/anchor-has-content */
import type { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export default function ExtLink(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      title={props.href}
      {...props}
      className={classNames('ext-link', props.className)}
    >
      {props.children}
    </a>
  );
}
