import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// global styles
import './assets/css/custom.css'
import 'bulma/css/bulma.min.css'
import 'aos/dist/aos.css'
import './index.css'       // your Tailwind build or custom styles
import "flowbite";

import AOS from 'aos'
AOS.init({ once: true, duration: 800 })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
