import { IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system';


const HeroSection = () => (
  <Box className="flex flex-col items-center justify-center text-center py-20 text-white">
    <h1 className="mt-10 text-4xl font-bold font-Inder mb-6">Let&apos;s build your own Agent</h1>
    <Link href='/createAgent'><div className="bg-[#242434] px-6 py-4 text-2xl rounded-full flex items-center space-x-3 hover:bg-[#1a1a27]">
      <span className='font-Inder text-2xl'>Start Here</span>
      <ArrowForwardIcon sx={{
        fontSize: 24,
        fontWeight:'bold'
      }}/>
    </div></Link>
  </Box>
);

export default HeroSection;
