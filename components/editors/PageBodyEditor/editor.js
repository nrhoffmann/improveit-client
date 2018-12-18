import React, { Component } from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import Html from 'slate-html-serializer';


import * as rules from './rules';
import * as shortcuts from './shortcuts';
import Toolbar from './toolbar';

const Paper = styled.div`
  padding: 8px;
  border: 1px solid #777;
  box-shadow: 0 10px 6px -6px #777;
`

const ToolbarButton = styled.button`
  /* border: unset; */
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

  onKeyDown = (event, editor, next) => {
    for (const shortcut of Object.values(shortcuts)) {
      if (shortcut.isKey(event)) {
        event.preventDefault();
        shortcut.invoke(editor);
        return true;
      }
    }

    return next();

    // if (event.ctrlKey && event.key == 'b') {
    //   event.preventDefault();
    //   editor.toggleMark('bold');
    // } else if (event.ctrlKey && event.altKey && event.key == 't') {
    //   event.preventDefault();
    //   editor.setBlocks('title');
    // } else {
    //   return next();
    // }
  }

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

        case 'title':
        return (
          <h1 {...props.attributes}>
            {props.children}
          </h1>
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
      // <Paper>
        <div>
          <Editor
            value={this.state.value}
            onChange={this.onChange}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            onKeyDown={this.onKeyDown}
            autoFocus
          />
          <Toolbar>
            <ToolbarButton>
              Italics
            </ToolbarButton>
            <ToolbarButton>
              Bold
            </ToolbarButton>
            <ToolbarButton>
              Underline
            </ToolbarButton>
          </Toolbar>
        </div>
      // </Paper>
    );
  }
}