import * as React from 'react';

export interface LinkExternalProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}
// export declare const LinkExternal: (props: LinkExternalProps) => JSX.Element;
// export default LinkExternal;

declare class LinkExternal extends React.Component<LinkExternalProps> {}
export default LinkExternal;
