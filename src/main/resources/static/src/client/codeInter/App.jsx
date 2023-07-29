import { useRef, useState, useEffect } from 'react'; // useEffect was missing from imports
import reactLogo from './assets/react.svg';
import Editor from "@monaco-editor/react";
import './App.css';

const files = {
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
}

function JavaEditor() {
  const [fileName, setFileName] = useState('player.java');
  const [code, setCode] = useState(''); // Added separate state for code
  const editorRef = useRef(null);
  const file = files[fileName];

  useEffect(() => {
    fetch('/api/class-templates/BaseClass')
      .then(response => response.text())
      .then(template => {
        setCode(template);
      });
  }, []);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    const player_code = editorRef.current.getValue()
    alert(player_code);
    fetch('api/player-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: player_code
    })
      .then(response => response.json())
      .then(data => {
        const result = data.result;
        alert(result);
      })
    // .catch(error => {
    // });
  }

  return (
    <div className='JavaEditor'>
      <button onClick={getEditorValue}>
        Get Editor Value
      </button>
      <button onClick={() => setFileName("player.java")}>
        Switch to player.java
      </button>
      <button onClick={() => setFileName("given.java")}>
        Switch to move.java
      </button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        defaultLanguage={file.language}
        path={file.name}
        value={code} // Changed from defaultValue to value
        onChange={value => setCode(value)}
      />
    </div>
  )
}

export default JavaEditor;