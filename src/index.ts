// ref:
// - https://umijs.org/plugins/api
import fs from 'fs';
import path from 'path';
import { IApi } from '@umijs/types';
import { getIconsContent } from './getIconsContent';
import { getIconComponentContent } from './getIconComponentContent';

const PLUGIN_DIR = 'plugin-antd-type-icon';

export default function (api: IApi) {
  api.describe({
    key: 'icons',
    config: {
      schema: (joi) => {
        return joi.array().items(
          joi.alternatives().try(
            joi.string(),
            joi.object(),
          )
        )
      },
      onChange: api.ConfigChangeType.regenerateTmpFiles,
    },
  });

  const { icons } = api.userConfig;
  if (!icons) {
    return;
  }
  if (!icons.length) {
    throw new Error('[umi-plugin-antd-type-icon]: icons must not be empty.');
  }

  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: `${PLUGIN_DIR}/iconsContent.ts`,
      content: getIconsContent(icons),
    });

    api.writeTmpFile({
      path: `${PLUGIN_DIR}/Icon.tsx`,
      content: getIconComponentContent(),
    });
  });

  api.addUmiExports(() => [{
    specifiers: ['Icon'],
    source: `../${PLUGIN_DIR}/Icon`,
  }]);

}
