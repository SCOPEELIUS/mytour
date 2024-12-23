import React from 'react'
import Sidebar from './maincomponents/sidebar'
import { Box, CssBaseline } from '@mui/material'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <Box sx={{display:'flex'  }}>
      {children}
      </Box>
  )
}

export default Layout