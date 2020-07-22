import React from 'react';
import { Icon } from 'umi';
import styles from './index.css';

export default () => (
  <div className={styles.normal}>
    Hello Umi!
    <ul>
      <li>
        <Icon type="VerticalRightOutlined" />
      </li>
      <li>
        <Icon type="Question" />
      </li>
      <li>
        <Icon type="PlusOutlined" />
      </li>
      <li>
        <Icon type="Plus" />
      </li>
      <li>
        <Icon type="Test" />
      </li>
      <li>
        <Icon type="TestError" />
      </li>
    </ul>
  </div>
);
