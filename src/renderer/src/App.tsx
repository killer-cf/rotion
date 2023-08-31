import './styles/global.css'

import { Routes } from './Routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/reacty-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
