import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { RecognizerSetup, RecognizerStart, RecognizerStop } from './speech';
import TestContext from './test-context';

import './main.less';


const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'caidewu...'
              }
            ]
          },
        ]
      }
    ]
  }
});

class Hello extends React.Component {
  state = {
    state: initialValue,
  };
  handleOpenDialog = () => {
    this.dialog.show();
  };
  handleCloseDialog = () => {
    this.dialog.close();
  };

  handleEditorChange = ({ value }) => {
    this.setState({ state: value })
  };
  fileChange = ({ target }) => {
    console.log('files:', target.files[0]);
    this.recognizer = RecognizerSetup('Interactive', 'zh-CN', 'Simple', '6aada6ced5964175913bfb887f5ca2c3', target.files[0]);

  };

  handleStart = () => {
    console.log('开始识别...');
    RecognizerStart(this.recognizer);
  };


  render() {
    return (
      <div className="container">
        <input type="file" onChange={this.fileChange}/>
        <button onClick={this.handleStart}>开始识别</button>
        <div>-</div>
        <button onClick={this.handleOpenDialog}>打开弹窗</button>
        <dialog ref={c => {
          this.dialog = c;
        }}>
          <button onClick={this.handleCloseDialog}>关闭</button>
          <h1>哈哈哈</h1>
          <p>kkkkk</p>
        </dialog>
        <Editor value={this.state.state} onChange={this.handleEditorChange} />
        <TestContext />
      </div>);
  }
}


const mountNode = document.getElementById('app');
ReactDOM.render(<Hello/>, mountNode);
