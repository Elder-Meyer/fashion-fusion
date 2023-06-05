import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export const Botones = () => {
  return (
    <>
      <Stack direction="column" spacing={1} m={2}>
        <Typography>Contained buttons</Typography>
        <Stack direction="row" spacing={2}>
          <Button>
            Default
          </Button>
          <Button variant='contained' color='primary'>
            Primary
          </Button>
          <Button variant='contained' color='secondary'>
            Secondary
          </Button>
          <Button variant='contained' disabled>
            Disabled
          </Button>
          <Button variant='contained'>
            Link
          </Button>
        </Stack>

        
        <Typography>Text buttons</Typography>
        <Stack direction="row" spacing={2}>
          <Button>
            Default
          </Button>
          <Button variant='text' color='primary'>
            Primary
          </Button>
          <Button variant='text' color='secondary'>
            Secondary
          </Button>
          <Button variant='text' disabled>
            Disabled
          </Button>
          <Button variant='text'>
            Link
          </Button>
        </Stack>


        <Typography>Outlined buttons</Typography>
        <Stack direction="row" spacing={2}>
          <Button>
            Default
          </Button>
          <Button variant='outlined' color='primary'>
            Primary
          </Button>
          <Button variant='outlined' color='secondary'>
            Secondary
          </Button>
          <Button variant='outlined' disabled>
            Disabled
          </Button>
          <Button variant='outlined'>
            Link
          </Button>
        </Stack>
      </Stack>
    </>
  )
}
