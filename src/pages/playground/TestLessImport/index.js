import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.less'

export class TestLessImport extends React.Component {
  render() {
    return (<div>
      <h1>Test Less Import</h1>
      <div className="icon icon-home"></div>
      <div className={styles.box} >css modules</div>
      <div className="box">global</div>
    </div>)
  }
}