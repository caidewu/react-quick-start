import React from 'react';
import styles from './style.less';

export default () => {
  console.log('render ');
  return (
    <div>
      <h1 className={styles.red}>About Page</h1>
    </div>
  );
};
