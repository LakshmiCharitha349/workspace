import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './polling.tsx'
import React from "react";
import { document } from "../$node_modules/.deno/postcss@8.5.10/$node_modules/postcss/lib/postcss.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
