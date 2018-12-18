export const Bold = {
  isKey(event) {
    return event.ctrlKey && event.key == 'b'
  },
  invoke(editor) {
    editor.toggleMark('bold');
  },
};