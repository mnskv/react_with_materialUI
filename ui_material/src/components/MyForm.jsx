import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function MyForm() {
  return (
    <Box
      component="form"
      height={200}
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
      noValidate
      autoComplete="off"
    >
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    </Box>
  )
}

export default MyForm