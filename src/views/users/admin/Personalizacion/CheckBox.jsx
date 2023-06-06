import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'

export const CheckBox = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box sx={{mt: 3}}>
        <Typography variant='subtitle1'>
          Checkbox
        </Typography>
        <Checkbox {...label} defaultChecked color='primary' />
        <Checkbox {...label} defaultChecked color='secondary' /> 
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
    </Box>
  )
}
