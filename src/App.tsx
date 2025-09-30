import React, { useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const App: React.FC = () => {
  const quillRef = useRef<ReactQuill | null>(null);

   // Handler customizado para imagem
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result;
          const quill = quillRef.current?.getEditor();
          const range = quill?.getSelection();
          if (range) {
            quill.insertEmbed(range.index, "image", base64);
          }
        };
        reader.readAsDataURL(file);
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"], // botão de imagem
      ],
      handlers: {
        image: imageHandler, // substitui comportamento padrão
      },
    },
  };

  const handleSave = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      console.log(editor.root.innerHTML); // Conteúdo em HTML
    }
  };

  return (
    <div>
      <h1>Editor com React Quill</h1>
      <ReactQuill ref={quillRef} theme="snow" modules={modules}/>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default App;
