import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

import { Routes } from './Routes'

export function App() {
  return (
    <div className="h-screen w-screen flex bg-rotion-900 text-rotion-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <Routes />
      </div>
    </div>
  )
}
