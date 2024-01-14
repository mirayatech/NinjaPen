import useLocalStorage from "../../hooks/useLocalStorage";
import { CodeEditor } from "../CodeEditor/CodeEditor";
import "./App.css";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [javascript, setJavascript] = useLocalStorage("javascript", "");

  return (
    <div className="pane top-pane">
      <CodeEditor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <CodeEditor
        language="css"
        displayName="CSS"
        value={css}
        onChange={setCss}
      />
      <CodeEditor
        language="javascript"
        displayName="JavaScript"
        value={javascript}
        onChange={setJavascript}
      />
    </div>
  );
}
