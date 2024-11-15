'use client'
import { Button, FormControl, MenuItem, Paper, Select, SelectChangeEvent, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { Suspense, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import WarningPopup from './WarningPopup';

const AgentExpectationPage = () => {
  const [day, setDay] = useState<string[]>(Array(3).fill('Daily'));
  const [popupOpen, setPopupOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get('type');

  const sections = [
    { title: 'Performance', description: 'Conduct in-depth security audits and vulnerability assessments.' },
    { title: 'Compliance', description: 'Ensure adherence to industry regulations and compliance standards.' },
    { title: 'Efficiency', description: 'Optimize processes for better performance and cost reduction.' },
  ];

  const handleChange = (event: SelectChangeEvent, index: number) => {
    const updatedDays = [...day];
    updatedDays[index] = event.target.value;
    setDay(updatedDays);
  };

  // Handle navigation with confirmation popup
  const handleBackClick = () => {
    setPopupOpen(true);
  };

  const handlePopupConfirm = () => {
    setPopupOpen(false);
    router.push(`/createAgent/${type}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 15 }}>
      <Typography className='mb-20 mt-3 font-Inder text-5xl' variant="h4">Agent Expectations</Typography>
      
      {sections.map((section, index) => (
        <Paper
          key={index}
          sx={{
            width: 900,
            height: 90,
            backgroundColor: '#181727',
            borderRadius: '16px',
            alignItems: 'center',
            paddingTop: '15px',
            paddingLeft: '15px',
            mt: index === 0 ? '3rem' : '1.5rem',
          }}
        >
          <Stack direction={'row'} justifyContent={'space-between'} width={'90%'} color={'white'}>
            <Stack>
              <Typography variant="h6" sx={{ color: '#A399F7', fontWeight: 'bold' }} className='font-PassionOne'>{section.title}</Typography>
              <Typography className='font-roboto'><ArrowRightIcon /> {section.description}</Typography>
            </Stack>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <Select
                  value={day[index]}
                  onChange={(event) => handleChange(event, index)}
                  id={`select-${index}`}
                  className='bg-[#3D3D47] rounded-2xl h-10 justify-center mt-3 ml-3 text-white font-roboto'
                >
                  <MenuItem value='Daily'>Daily</MenuItem>
                  <MenuItem value='Weekly'>Weekly</MenuItem>
                  <MenuItem value='Monthly'>Monthly</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Paper>
      ))}

      <Box sx={{ width: 600, display: 'flex', justifyContent: 'space-evenly', mt: 6 }}>
        {/* Button that triggers the confirmation popup */}
        <Button
          variant='outlined'
          className='px-6 py-2 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#f23505] hover:text-white'
          onClick={handleBackClick}
        >
          Back to Edit
        </Button>
        <Link href='/chatpage'>
          <Button variant='outlined' className='px-6 py-2 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#656bbb] hover:text-white'>
            Publish
          </Button>
        </Link>
      </Box>

      {/* Warning Popup */}
      <WarningPopup 
        open={popupOpen} 
        onClose={() => setPopupOpen(false)} 
        onConfirm={handlePopupConfirm} 
      />
    </Box></Suspense>
  );
};

export default AgentExpectationPage;
