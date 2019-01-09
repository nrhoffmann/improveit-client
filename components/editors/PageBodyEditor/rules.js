export const Paragraph = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'p') {
      return {
        object: 'block',
        type: 'paragraph',
        data: {
          className: el.getAttribute('class')
        },
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'block' && obj.type == 'paragraph') {
      return (
        <p className={obj.data.get('className')}>
          {children}
        </p>
      );
    }
  },
};

export const Title = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'h2') {
      return {
        object: 'block',
        type: 'title',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'block' && obj.type == 'title') {
      return (
        <h2 className="p-title">
          {children}
        </h2>
      );
    }
  },
};

export const Heading = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'h6') {
      return {
        object: 'block',
        type: 'heading',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'block' && obj.type == 'heading') {
      return (
        <h6 className="p-heading">
          {children}
        </h6>
      );
    }
  },
};

export const Quote = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'blockquote') {
      return {
        object: 'block',
        type: 'quote',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'block' && obj.type == 'quote') {
      return (
        <blockquote>
          {children}
        </blockquote>
      );
    }
  },
};

export const Code = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'pre') {
      return {
        object: 'block',
        type: 'code',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'block' && obj.type == 'code') {
      return (
        <pre>
          <code>
            {children}
          </code>
        </pre>
      );
    }
  },
};

export const Bold = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'strong') {
      return {
        object: 'mark',
        type: 'bold',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'mark' && obj.type == 'bold') {
      return (
        <strong>
          {children}
        </strong>
      );
    }
  },
};

export const Underline = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'u') {
      return {
        object: 'mark',
        type: 'underline',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'mark' && obj.type == 'underline') {
      return (
        <u>
          {children}
        </u>
      );
    }
  },
};

export const Italic = {
  deserialize(el, next) {
    if (el.tagName.toLowerCase() == 'em') {
      return {
        object: 'mark',
        type: 'italic',
        nodes: next(el.childNodes),
      };
    }
  },
  serialize(obj, children) {
    if (obj.object == 'mark' && obj.type == 'italic') {
      return (
        <em>
          {children}
        </em>
      );
    }
  },
};