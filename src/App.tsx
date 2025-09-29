import { useState } from 'react'
import './App.css'
import { Box, IconButton, Tooltip } from '@mui/material'
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ p: 2 }}>
      {/* Toolbar customizada com MUI */}
      <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
        <Tooltip title="Negrito">
          <IconButton onClick={() => document.execCommand("bold")}>
            <FormatBoldIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Itálico">
          <IconButton onClick={() => document.execCommand("italic")}>
            <FormatItalicIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sublinhado">
          <IconButton onClick={() => document.execCommand("underline")}>
            <FormatUnderlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Editor de texto */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "300px", backgroundColor: "white" }}
      />
    </Box>
  )
}

export default App
