'use client';

import React, { useState, useEffect, Suspense } from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import WarningPopup from './WarningPopup';

const AgentExpectationPage = () => {
  // State to manage the frequency selection
  const [day, setDay] = useState<string[]>(Array(3).fill('Daily'));
  const [popupOpen, setPopupOpen] = useState(false);
  const [type, setType] = useState<string>('');
  const router = useRouter();

  // Fetch the 'type' query parameter on the client side using useRouter
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryType = queryParams.get('type') ?? '';
    setType(queryType);
  }, []);

  // Sections data for displaying different expectations
  const sections = [
    { title: 'Performance', description: 'Conduct in-depth security audits and vulnerability assessments.' },
    { title: 'Compliance', description: 'Ensure adherence to industry regulations and compliance standards.' },
    { title: 'Efficiency', description: 'Optimize processes for better performance and cost reduction.' },
  ];

  // Handle select dropdown change
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
    if (type) {
      router.push(`/createAgent/${type}`);
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 15,
        }}
      >
        {/* Page Heading */}
        <Typography className='mb-20 mt-3 font-Inder text-5xl' variant="h4">
          Agent Expectations
        </Typography>

        {/* Render each section with a select dropdown */}
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
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'90%'}
              color={'white'}
            >
              {/* Section Title and Description */}
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: '#A399F7', fontWeight: 'bold' }}
                  className='font-PassionOne'
                >
                  {section.title}
                </Typography>
                <Typography className='font-roboto'>
                  <ArrowRightIcon /> {section.description}
                </Typography>
              </Stack>

              {/* Select Dropdown */}
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <Select
                    value={day[index]}
                    onChange={(event) => handleChange(event, index)}
                    id={`select-${index}`}
                    className='bg-[#3D3D47] rounded-2xl h-10 text-white'
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

        {/* Navigation Buttons */}
        <Box sx={{ width: 600, display: 'flex', justifyContent: 'space-evenly', mt: 6 }}>
          <Button
            variant='outlined'
            className='px-6 py-2 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#f23505] hover:text-white'
            onClick={handleBackClick}
          >
            Back to Edit
          </Button>
          
          {/* Link Button for Publishing */}
          <Link href='/chatpage' passHref>
            <Button
              variant='outlined'
              className='px-6 py-2 rounded-2xl text-[#A7AAD9] border-[#A7AAD9] hover:bg-[#656bbb] hover:text-white'
            >
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
      </Box>
    </Suspense>
  );
};

export default AgentExpectationPage;
