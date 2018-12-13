import React, { Component } from 'react'
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import { PageNameEditor } from 'components/editors/PageNameEditor';

const initialVal = Plain.deserialize(
  `The quick brown fox jumps over the lazy dog.`
);


class New extends Component {
  
  state = {
    val: initialVal,
  };

  onChange = change => {
    this.setState({ val: change.value });
  };

  onKeyDown = (event, editor, next) => {
    console.log(event.key);
    return next();
  };

  render() {
    return (
      <PageNameEditor/>
      // <Editor
      //   value={this.state.val}
      //   onChange={this.onChange}
      //   onKeyDown={this.onKeyDown}
      // />
    );
  }
}

export default New;