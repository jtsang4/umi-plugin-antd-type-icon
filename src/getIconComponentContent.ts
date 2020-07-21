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
  return <Component {...otherProps} />;
};
`;
}
