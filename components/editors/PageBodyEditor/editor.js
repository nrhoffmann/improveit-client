import React, { Component } from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import Html from 'slate-html-serializer';


import * as rules from './rules';

const Paper = styled.div`
  padding: 8px;
  border: 1px solid #777;
  box-shadow: 0 10px 6px -6px #777;
`
const HtmlSerializer = new Html({
  rules: Object.values(rules)
});

export default class PageBodyEditor extends Component {
  state = {
    value: HtmlSerializer.deserialize('<p></p>'),
  };

  onChange = ({ value }) => {
    this.setState({ value })
  };

  renderNode = (props, editor, next) => {
    switch (props.node.type) {

      case 'code':
        return (
          <pre {...props.attributes}>
            <code>
              {props.children}
            </code>
          </pre>
        );
      
      case 'paragraph':
        return (
          <p {...props.attributes}
            className={props.node.data.get('className')}
          >
            {props.children}
          </p>
        );
      
      case 'quote':
        return (
          <blockquote {...props.attributes}>
            {props.children}
          </blockquote>
        );

      default:
        return next();
    }
  }

  renderMark = (props, editor, next) => {
    switch(props.mark.type) {

      case 'bold':
        return (
          <strong {...props.attributes}>
            {props.children}
          </strong>
        );
      
      case 'italic':
        return (
          <em {...props.attributes}>
            {props.children}
          </em>
        );
      
      case 'underline':
        return (
          <u {...props.attributes}>
            {props.children}
          </u>
        );

      default:
        return next()
    }
  }

  render() {
    return (
      <Paper>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </Paper>
    );
  }
}