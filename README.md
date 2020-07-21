# umi-plugin-antd-type-icon

[![NPM version](https://img.shields.io/npm/v/umi-plugin-antd-type-icon.svg?style=flat)](https://npmjs.org/package/umi-plugin-antd-type-icon)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-antd-type-icon.svg?style=flat)](https://npmjs.org/package/umi-plugin-antd-type-icon)

Add `<Icon type="iconType" />` component for antd@4 and only import icons you need.

> - When to use this plugin?
>
> If you want to render antd icon dynamically, this plugin could render icons in a scope which you specified instead of import all antd icons. 


## Install

```bash
# or yarn
$ npm install umi-plugin-antd-type-icon --save
```

## Usage

### 1. Configure in `.umirc.js`,

```js
export default {
  plugins: [
    'umi-plugin-antd-type-icon',
  ],
  icons: [
    'UpOutlined',
    {
      QuestionOutlined: 'Question',
      PlusOutlined: ['PlusOutlined', 'Plus'],
    },
  ],
}
```

### 2. Use in component

```jsx
import React from 'react';
import { Icon } from 'umi';

const FooComponent = props => {
  const { type } = props; // 'type' could be: 'UpOutlined', 'Question', 'PlusOutlined', 'Plus'
  return (
    <div>
      <Icon type={type} />
    </div>
  );
};
```

## Options

### `icons`

An array to specify which icons you need. Support 3 forms:

1. Origin icon type in antd

Like `'UpOutlined'` which is origin from antd Icons.

2. Map origin type to another type

Like `{ QuestionOutlined: 'Question' }`, 'QuestionOutlined' is origin from antd, then you can use it as 'Question' type.

3. Map origin type to a group of types

Like `{ PlusOutlined: ['PlusOutlined', 'Plus'] }`, 'PlusOutlined' is origin from antd, then you can use it as 'PlusOutlined' or 'Plus' type.

## Extra

Icon type mapping string should not duplicate.

## LICENSE

MIT
