import { HomeOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const Iconos = () => {
  return (
    <>
        <Box sx={{mt: 2}}>
            <Typography variant='subtitle1'>
              Iconos
            </Typography>
            <HomeOutlined color='primary'/>
            <HomeOutlined color='secondary'/>
        </Box>
    </>
  )
}
