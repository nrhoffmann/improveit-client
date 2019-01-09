export const Bold = {
  isKey(event) {
    return event.ctrlKey && event.key == 'b'
  },
  invoke(editor) {
    editor.toggleMark('bold');
  },
};

export const Title = {
  isKey(event) {
    return event.ctrlKey && event.altKey &&  event.key == 't'
  },
  invoke(editor) {
    editor.setBlocks('title');
  },
};

export const Heading = {
  isKey(event) {
    return event.ctrlKey && event.key == 'H'
  },
  invoke(editor) {
    editor.setBlocks('heading');
  },
};