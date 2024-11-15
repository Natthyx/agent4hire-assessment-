'use client'
import { Button, List, ListItem, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const AgentSummaryPage = () => {
const searchParams = useSearchParams();
  const type = searchParams.get('type');

  console.log(type);
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt:15,
    }}>
        <Typography className='mb-6 mt-3 font-Inder text-5xl' variant="h4" component="h5">Agent Resume</Typography>
        <Paper
        sx={{
            width: 900,
            height: 450,
            backgroundColor: '#0D0C19',
            borderRadius: '16px',
            alignItems: 'center',
            cursor: 'pointer',
            paddingTop:'20px',
            mb:'4rem',
            
          }}>
        
            <List>
                <ListItem className='flex justify-center'>
                    <Typography className='text-center text-white font-bold' sx={{
                        fontSize: '2rem',
                    }} variant='h5'>Agent-001</Typography>
                </ListItem>,
                <ListItem>
                    <Typography variant='body1'
                    sx={{
                        width: 700,
                        height: 400,
                        margin:'auto',
                        color:'#A7AAD9',
                        mt:5
                    }}>Agent-001 is a highly skilled operative known for their expertise in cybersecurity and data intelligence. With years of experience in analyzing complex data systems and uncovering hidden threats, they excel in high-pressure environments where quick thinking and precision are paramount. Their strategic approach ensures that sensitive information remains secure while identifying potential risks before they escalate.<br></br>Role: Cybersecurity Specialist
                        </Typography>
                        
                </ListItem>
            </List>
            
          </Paper>
          <Paper
        sx={{
            width: 900,
            height: 500,
            backgroundColor: '#0D0C19',
            borderRadius: '16px',
            alignItems: 'center',
            cursor: 'pointer',
            paddingTop:'20px',
            mb:'5rem',
            
          }}>
            <List>
                <ListItem className='flex justify-center'>
                    <Typography className='text-center text-white font-bold' sx={{
                        fontSize: '2.5rem',
                    }} variant='h5'>Goals</Typography>
                </ListItem>,
                <ListItem>
                    
                <List className='text-white' sx={{
                    width: 700,
                    margin:'auto',
                    color:'#A7AAD9'
                }}>
                    <ListItem className='text-[#A7AAD9]'>
                     <CheckIcon className='mr-5 ml-5'></CheckIcon> Conduct in-depth security audits and vulnerability assessments.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5 ml-5'></CheckIcon> Monitor and analyze network traffic for potential security breaches.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5 ml-5'></CheckIcon>Develop strategies to counteract cyber threats and safeguard data.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5 ml-5'></CheckIcon> Collaborate with IT teams to implement robust security protocols.
                    </ListItem>
                    <ListItem className='text-[#A7AAD9]'>
                    <CheckIcon className='mr-5 ml-5'></CheckIcon> Provide real-time incident response and threat mitigation.
                    </ListItem>
                    
                </List>
                        
                </ListItem>
            </List>
          </Paper>
          <Box sx={{
            width:600,
            display:'flex',
            justifyContent:'space-evenly',
            mb:6
          }}>
            <Link href={`/createAgent/${type}`}><Button variant='outlined' className='px-6 py-3 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#f23505] hover:text-white'>Back to Edit</Button></Link>
            <Link href={`/agentExpectation/?type=${type}`}><Button variant='outlined' className='px-6 py-2 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#656bbb] hover:text-white'>Publish</Button></Link>
          </Box>
    </Box>
  )
}

export default AgentSummaryPage