import { CodeEditor } from "../CodeEditor/CodeEditor";

export default function App() {
  return (
    <div>
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
