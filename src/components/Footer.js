import React from 'react'
import { Box, Stack } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4" padding="5px">
      <Stack gap="40px" alignItems="center" flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
      </Stack>
    </Box>
  )
}

export default Footer