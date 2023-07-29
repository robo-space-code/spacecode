// Configure require.js
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' }});

// File objects
var files = {
  "player.java": {
    name: "filename",
    language: 'java',
    value: ''
  },
  "given.java": {
    name: "move.java",
    language: "java",
    value: ''
  }
};

// Initial file
var currentFile = files['player.java'];

// Create Monaco Editor instance
var editor = null;
require(['vs/editor/editor.main'], function() {
  editor = monaco.editor.create(document.getElementById('javaEditor'), {
    value: currentFile.value,
    language: currentFile.language
  });
});

// Button click handlers
document.getElementById('getValueButton').addEventListener('click', function() {
  alert(editor.getValue());
});
document.getElementById('setFilePlayer').addEventListener('click', function() {
  currentFile = files['player.java'];
  editor.setValue(currentFile.value);
  monaco.editor.setModelLanguage(editor.getModel(), currentFile.language);
});
document.getElementById('setFileGiven').addEventListener('click', function() {
  currentFile = files['given.java'];
  editor.setValue(currentFile.value);
  monaco.editor.setModelLanguage(editor.getModel(), currentFile.language);
});
