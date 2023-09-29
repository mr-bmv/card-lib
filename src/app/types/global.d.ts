declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
  // alternative
  // const content: React.FC<React.SVGProps<SVGElement>>
  // export default content
}

declare module '*.webp' {
  const ref: string;
  export default ref;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
