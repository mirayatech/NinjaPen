import { CodeEditor } from "../CodeEditor/CodeEditor";
import "./App.css";

export default function App() {
  return (
    <div className="pane top-pane">
      <CodeEditor
        language="xml"
        displayName="HTML"
        value="<h1>Hello World</h1>"
        onChange={console.log}
      />
      <CodeEditor
        language="css"
        displayName="CSS"
        value="body { background-color: red; }"
        onChange={console.log}
      />
      <CodeEditor
        language="javascript"
        displayName="JavaScript"
        value="const x = 1;"
        onChange={console.log}
      />
    </div>
  );
}
