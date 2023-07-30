export function createEditor(elementId) {
  return CodeMirror.fromTextArea(document.getElementById(elementId), {
      lineNumbers: true,  // Show line numbers
      mode: 'javascript' // Use JavaScript syntax highlighting
  });
}