import * as React from 'react';
import { CSSModule } from './utils';

export interface LinkExternalProps extends React.HTMLAttributes<HTMLElement> {
  // tag?: React.ElementType;
  cssModule?: CSSModule;
  // flush?: boolean;
  // innerRef?: React.Ref<HTMLElement>;
  // open: string | string[];
}

// export interface UncontrolledLinkExternalProps extends LinkExternalProps {
//   defaultOpen?: string | string[];
//   stayOpen?: boolean;
// }

declare class LinkExternal extends React.Component<LinkExternalProps> {}
export default LinkExternal;
