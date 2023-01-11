import classnames from 'classnames';
import * as React from 'react';
import styles from './LinkExternal.module.scss';

export interface LinkExternalProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

// type LinkExternalProps = {
//   // href: string;
//   className?: string;
// };

// function LinkExternal(
//   props: LinkExternalProps
// ): React.Component<any, any, any> {
export const LinkExternal = (props: LinkExternalProps) => {
  const className = classnames(styles.LinkExternal, props.className);

  return (
    <a {...props} target="_blank" rel="noreferrer" className={className}>
      {props.children}
    </a>
  );
};

export default LinkExternal;
