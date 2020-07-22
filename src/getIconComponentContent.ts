export function getIconComponentContent() {
  return `\
import React from 'react';
import * as Icons from './iconsContent';

export type IconType = keyof typeof Icons;

export interface IconProps {
  type: IconType;
  className?: string;
  style?: React.CSSProperties;
  spin?: boolean;
  rotate?: number;
  twoToneColor?: string;
}

export const Icon: React.FC<IconProps> = props => {
  const { type, ...otherProps } = props;
  const Component = Icons[type];
  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      console.error(\`[umi-plugin-antd-type-icon]: The icon type "\${type}" is not specified in config.\`);
    }
    return null;
  }
  return <Component {...otherProps} />;
};
`;
}
