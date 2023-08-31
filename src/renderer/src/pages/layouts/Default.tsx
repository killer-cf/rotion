import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root
      open={isSidebarOpen}
      onOpenChange={setIsSidebarOpen}
      className="h-screen w-screen flex text-rotion-100"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />

        <Outlet />
      </div>
    </Collapsible.Root>
  )
}
