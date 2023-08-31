import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (event, params) => {
  console.log(params)

  return [
    { id: '1', title: 'Ignite' },
    { id: '2', title: 'Discover' },
    { id: '3', title: 'Rocketseat' },
    { id: '4', title: 'Documentos' },
  ]
})
