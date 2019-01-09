import React, { Component } from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import Html from 'slate-html-serializer';


import * as rules from './rules';
import * as shortcuts from './shortcuts';

import '#/p.css';
import Page from '@/layout/Page';
import Header from '@/layout/Header';
import { GrayMatter } from '_/css-vars';

const Toolbar = styled.div`
  float: left;
  box-sizing: border-box;
  width: 22%;
  position: fixed;
  height: 100vh;
  background: ${GrayMatter};
`

const Content = styled.div`
  float: right;
  box-sizing: border-box;
  width: 78%;
`

const HtmlSerializer = new Html({
  rules: Object.values(rules)
});

const initialValue = localStorage.getItem('content') || '<p></p>';


export default class PageBodyEditor extends Component {
  state = {
    value: HtmlSerializer.deserialize(initialValue),
  };

  onChange = ({ value }) => {
    if (value.document != this.state.value.document) {
      const string = HtmlSerializer.serialize(value);
      localStorage.setItem('content', string);
    }

    this.setState({ value });
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
          <h2 {...props.attributes}
            className="p-title"
          >
            {props.children}
          </h2>
        );

        case 'heading':
        return (
          <h6 {...props.attributes}
            className="p-heading"
          >
            {props.children}
          </h6>
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
        <div className="row">
          <Toolbar>
          </Toolbar>
          <Content>
            <Header/>
            <Page>
              <Editor
                value={this.state.value}
                onChange={this.onChange}
                renderNode={this.renderNode}
                renderMark={this.renderMark}
                onKeyDown={this.onKeyDown}
                autoFocus
              />
            </Page>
          </Content>
        </div>
      // </Paper>
    );
  }
}