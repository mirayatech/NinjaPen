import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "./CodeEditor.css";

type CodeEditorProps = {
  language: string;
  displayName: string;
  value: string;
  onChange: (value: string) => void;
};

export function CodeEditor({
  language,
  displayName,
  value,
  onChange,
}: CodeEditorProps) {
  return (
    <div>
      <div>
        {displayName}
        <button>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={onChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
