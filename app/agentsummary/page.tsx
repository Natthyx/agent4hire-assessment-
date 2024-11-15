'use client';
import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AgentSummaryPage = () => {
  const router = useRouter();
  const [type, setType] = useState<string>('');

  // Fetch the 'type' query parameter on the client side using useRouter
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryType = queryParams.get('type') ?? '';
    setType(queryType);
  }, []);

  console.log('Type:', type);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 15,
      }}
    >
      <Typography className='mb-6 mt-3 font-Inder text-5xl' variant="h4" component="h5">
        Agent Resume
      </Typography>

      {/* Agent Resume Section */}
      <Paper
        sx={{
          width: 900,
          height: 450,
          backgroundColor: '#0D0C19',
          borderRadius: '16px',
          alignItems: 'center',
          cursor: 'pointer',
          paddingTop: '20px',
          mb: '4rem',
        }}
      >
        <List>
          <ListItem className='flex justify-center'>
            <Typography
              className='text-center text-white font-bold'
              sx={{ fontSize: '2rem' }}
              variant='h5'
            >
              Agent-001
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body1'
              sx={{
                width: 700,
                height: 400,
                margin: 'auto',
                color: '#A7AAD9',
                mt: 5,
              }}
            >
              Agent-001 is a highly skilled operative known for their expertise in cybersecurity and
              data intelligence. With years of experience in analyzing complex data systems and
              uncovering hidden threats, they excel in high-pressure environments where quick
              thinking and precision are paramount. Their strategic approach ensures that sensitive
              information remains secure while identifying potential risks before they escalate.
              <br />
              Role: Cybersecurity Specialist
            </Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Agent Goals Section */}
      <Paper
        sx={{
          width: 900,
          height: 500,
          backgroundColor: '#0D0C19',
          borderRadius: '16px',
          alignItems: 'center',
          cursor: 'pointer',
          paddingTop: '20px',
          mb: '5rem',
        }}
      >
        <List>
          <ListItem className='flex justify-center'>
            <Typography
              className='text-center text-white font-bold'
              sx={{ fontSize: '2.5rem' }}
              variant='h5'
            >
              Goals
            </Typography>
          </ListItem>
          <ListItem>
            <List
              className='text-white'
              sx={{
                width: 700,
                margin: 'auto',
                color: '#A7AAD9',
              }}
            >
              {[
                'Conduct in-depth security audits and vulnerability assessments.',
                'Monitor and analyze network traffic for potential security breaches.',
                'Develop strategies to counteract cyber threats and safeguard data.',
                'Collaborate with IT teams to implement robust security protocols.',
                'Provide real-time incident response and threat mitigation.',
              ].map((goal, index) => (
                <ListItem key={index} className='text-[#A7AAD9]'>
                  <CheckIcon className='mr-5 ml-5' />
                  {goal}
                </ListItem>
              ))}
            </List>
          </ListItem>
        </List>
      </Paper>

      {/* Navigation Buttons */}
      <Box
        sx={{
          width: 600,
          display: 'flex',
          justifyContent: 'space-evenly',
          mb: 6,
        }}
      >
        <Link href={`/createAgent/${type}`} passHref>
          <Button
            variant='outlined'
            className='px-6 py-3 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#f23505] hover:text-white'
          >
            Back to Edit
          </Button>
        </Link>
        <Link href={`/agentExpectation/?type=${type}`} passHref>
          <Button
            variant='outlined'
            className='px-6 py-2 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#656bbb] hover:text-white'
          >
            Publish
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default AgentSummaryPage;
