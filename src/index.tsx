import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/typescript/App'
import './styles/main.scss'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<App />)