import { Box } from '@mui/material'
import React from 'react'
import VerticalTabs from './VerticalTabs'
import BasicTabs from './BasicTabs'



export const AdminPanel = () => {
  return (
    <Box>
        <Box sx={{display : {xs: "none", md: "flex", lg: "flex", xl: "flex"}}}>
            <VerticalTabs/>
        </Box>
        <Box sx={{display : {xs: "flex", md: "none", lg: "none", xl: "none"}}}>
            <BasicTabs/>            
        </Box>
    </Box>
  )
}
