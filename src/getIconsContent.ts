export type IconOption  = (string | { [k: string]: string; } | { [k: string]: string[]; });

export function getIconsContent(iconOptions: IconOption[]) {
  const importIcons: string[] = [];
  iconOptions.forEach(iconOption => {
    if (typeof iconOption === 'string') {
      importIcons.push(iconOption);
      return;
    }
    const keys = Object.keys(iconOption);
    if (!keys.length) {
      throw new Error('[umi-plugin-antd-type-icon]: Option object is empty.');
    }
    keys.forEach(key => { importIcons.push(key); });
  });

  return `\
import {
  ${importIcons.join(',\n  ')}
} from '@ant-design/icons';

${iconOptions.map(iconOption => {
  if (typeof iconOption === 'string') {
    return `export { ${iconOption} };`;
  }
  const keys = Object.keys(iconOption);
  return keys.map(key => {
    const value = iconOption[key];
    if (typeof value === 'string') {
      return key === value ? `export { ${value} };` : `export const ${value} = ${key};`;
    }
    if (!Array.isArray(value)) {
      throw new Error('[umi-plugin-antd-type-icon]: Option object\'s value must be string or string array');
    }
    return value.map(i => { return i === key ? `export { ${i} };` : `export const ${i} = ${key};` }).join('\n');
  }).join('\n');
}).join('\n')}
`;
}
