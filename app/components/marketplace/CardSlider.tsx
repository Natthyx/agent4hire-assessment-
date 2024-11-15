'use client';

import React, { FC, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ListingCard from './AgentCard';

interface SwiperComponentProps {
  agents: Array<{
    name: string;
    username: string;
    description: string;
    logo: any;
  }>;
  rows?: number; // Number of rows to display, defaults to 2
}

const SwiperComponent: FC<SwiperComponentProps> = ({ agents, rows = 2 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust based on how far each button click should scroll
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Split agents into two rows if rows is set to 2
  const agentsInRows = rows === 2 ? [agents.slice(0, Math.ceil(agents.length / 2)), agents.slice(Math.ceil(agents.length / 2))] : [agents];

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Left Gradient Shadow */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          height: '3rem',
          width: '3rem',
          background: '#D9D9D9',
          opacity: 0.5,
          zIndex: 1,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />
      <IconButton
        onClick={() => scroll('left')}
        sx={{ position: 'absolute', left: 3, zIndex: 1 }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          flexDirection: 'column', // Stack rows vertically
          overflowX: 'scroll',
          gap: '1rem',
          padding: '1rem',
          scrollBehavior: 'smooth',
          width: '100%',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar in WebKit browsers
        }}
      >
        {/* Render each row */}
        {agentsInRows.map((agentsRow, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              gap: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            {agentsRow.map((agent, index) => (
              <Box key={index} sx={{ display: 'inline-block' }}>
                <ListingCard agent={agent} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Right Gradient Shadow */}
      <Box
        sx={{
          position: 'absolute',
          right: '-20px',
          height: '3rem',
          width: '3rem',
          background: '#D9D9D9',
          opacity: 0.5,
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <IconButton
        onClick={() => scroll('right')}
        sx={{ position: 'absolute', right: '-18px', zIndex: 1 }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default SwiperComponent;
