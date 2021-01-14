import "./App.css";
import { TextArea } from "./components";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  return (
    <main className="App">
      <TextArea onMouseUp={setText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        pariatur eos aperiam saepe, beatae necessitatibus exercitationem, nemo,
        sit provident possimus debitis modi eligendi repellat iure vitae
        perferendis? Recusandae accusamus placeat velit itaque quis fuga
        laudantium debitis, ab eaque voluptatum illo esse incidunt! Quia tempore
        explicabo sint laboriosam rerum nihil voluptates voluptatibus voluptate
        iure. Earum magnam blanditiis voluptates quod ex exercitationem
        reiciendis, iure qui ducimus similique impedit nemo est, quisquam facere
        id adipisci harum tenetur consequuntur illum saepe laudantium. Suscipit
        facilis corporis natus aperiam! Reprehenderit hic quia natus nisi
        similique quod fugiat, architecto autem deleniti unde commodi accusamus
        modi voluptate?
      </TextArea>
      <p>{text}</p>
    </main>
  );
}

export default App;
