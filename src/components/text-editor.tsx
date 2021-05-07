import { useState, useEffect, useRef } from 'react';

import MDEditor from '@uiw/react-md-editor';

import './text-editor.css';

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('# Header')

  useEffect(() => {
    const listerner = (e: MouseEvent) => {
      if (ref.current &&
        e.target &&
        ref.current.contains(e.target as Node)) {
        return;
      } 
      setIsEditing(false)
    }

    document.addEventListener('click', listerner, { capture: true });

    return () => document.removeEventListener('click', listerner, { capture: true });
  }, []);

  if (isEditing) {
    return (
      <div ref={ref} className="text-editor card">
        <div className="card-content">
          <MDEditor value={value} onChange={(v) => setValue(v || '')} />
        </div>
      </div>
    );
  }

  return (
    <div onClick={() => setIsEditing(true)}>
      <MDEditor.Markdown className="text-editor" source={value} />
    </div>
  );
};

export default TextEditor;