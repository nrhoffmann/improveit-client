import React, { Component } from 'react'
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';

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

  render() {
    return (
      <Editor
        value={this.state.val}
        onChange={this.onChange}
      />
    );
  }
}

export default New;