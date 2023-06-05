import { HomeOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

export const Iconos = () => {
  return (
    <>
        <Box
            sx={{
                '& > :not(style)': {
                m: 2,
                },
            }}
        >
            <HomeOutlined color='primary'/>
            <HomeOutlined color='secondary'/>

        </Box>
    </>
  )
}
