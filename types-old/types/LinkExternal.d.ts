import * as React from 'react';
export interface LinkExternalProps extends React.PropsWithChildren<HTMLElement> {
    className?: string;
}
declare const LinkExternal: (props: LinkExternalProps) => JSX.Element;
export default LinkExternal;
