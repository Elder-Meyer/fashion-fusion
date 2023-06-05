import { Checkbox } from '@mui/material'
import React from 'react'

export const CheckBox = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <div>
        <Checkbox {...label} defaultChecked color='primary' />
        <Checkbox {...label} defaultChecked color='secondary' /> 
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
    </div>
  )
}
