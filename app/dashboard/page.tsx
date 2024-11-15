import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Dashboard = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt:25,
    }}>
        <Typography variant='h1'>Coming Soon</Typography>
    </Box>
  )
}

export default Dashboard