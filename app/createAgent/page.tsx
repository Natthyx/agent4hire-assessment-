'use client'
import React from 'react';
import { Box, Typography, Paper, List, ListItem } from '@mui/material';
import Link from 'next/link';
import CheckIcon from '@mui/icons-material/Check';


const CreateAgent = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#080714',
      }}
    >
      <Typography variant="h4" className='font-Inder' sx={{ color: '#fff', mb: 4 }}>
        Which one do you want to build?
      </Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Team of Agents Container */}
        <Link href='/createAgent/team'>
        <Paper
          sx={{
            width: 400,
            height: 400,
            backgroundColor: '#1c1c24',
            borderRadius: '16px',
            alignItems: 'center',
            cursor: 'pointer',
            paddingTop:'20px',
            '&:hover': { backgroundColor: '#282833' },
          }}
        >
          <Typography sx={{ color: '#fff', textAlign: 'center', fontSize:30, fontWeight:'bold' }}>Team of Agents</Typography>
          <List className='text-white' sx={{
                    width: 300,
                    margin:'auto',
                    color:'#A7AAD9'
                }}>
                    <ListItem className='text-[#A7AAD9]'>
                     <CheckIcon className='mr-5'></CheckIcon> Conduct in-depth security audits and vulnerability assessments.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5'></CheckIcon> Monitor and analyze network traffic for potential security breaches.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5'></CheckIcon>Develop strategies to counteract cyber threats and safeguard data.
                    </ListItem>
                    
                    
                </List>
          
        </Paper></Link>

        {/* Single Agent Container */}
        <Link href='/createAgent/single'><Paper
          sx={{
            width: 400,
            height: 400,
            backgroundColor: '#1c1c24',
            borderRadius: '16px',
            alignItems: 'center',
            cursor: 'pointer',
            paddingTop:'20px',
            '&:hover': { backgroundColor: '#282833' },
          }}
        >
          <Typography sx={{ color: '#fff',textAlign: 'center',fontSize:30, fontWeight:'bold' }}>Single Agent</Typography>
          <List className='text-white' sx={{
                    width: 300,
                    margin:'auto',
                    color:'#A7AAD9'
                }}>
                    <ListItem className='text-[#A7AAD9]'>
                     <CheckIcon className='mr-5'></CheckIcon> Conduct in-depth security audits and vulnerability assessments.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5'></CheckIcon> Monitor and analyze network traffic for potential security breaches.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5'></CheckIcon>Develop strategies to counteract cyber threats and safeguard data.
                    </ListItem>
                    
                    
                </List>
        </Paper></Link>
      </Box>
    </Box>
  );
};

export default CreateAgent;
