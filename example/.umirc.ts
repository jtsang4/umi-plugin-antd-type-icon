import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    require.resolve('../lib'),
  ],
  icons: [
    'VerticalRightOutlined',
    {
      QuestionOutlined: 'Question',
      PlusOutlined: ['PlusOutlined', 'Plus'],
    },
    {
      ArrowDownOutlined: 'Test',
    }
  ],
});
