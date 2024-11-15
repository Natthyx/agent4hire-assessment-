'use client';

import React from 'react';
import {  Card, Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

interface AgentProps {
  agent: {
    name: string;
    username: string;
    description: string;
    logo: string;
  };
}

const StyledCard = styled(Card)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: "0.5rem",
  borderRadius: '1rem',
  backgroundColor: '#2B2B36',
  color: "#ffffff",
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  width: '20rem',
  gap: '0.5rem',
  height: '10rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: "#2B2B30",
    transform: 'scale(1.01)',
  },
}));

const ListingCard: React.FC<AgentProps> = ({ agent }) => {
  return (
    <Link href='/chatpage'><StyledCard>
      <Stack sx={{
        width: '50%',
        height: '100%',
        position: 'relative',
        display: 'block'
      }}>
        <Image
          src={agent.logo}
          alt={`${agent.name} logo`}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '10%' }}
        />
      </Stack>
      <Stack
        sx={{
          width: '70%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '0.2rem',
        }}
      >
        <Stack
          sx={{
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          <Typography variant="h6" className='font-roboto font-semibold'>{agent.name}</Typography>
          <Typography variant="body1" className='font-roboto'>
            {agent.description.length > 25
              ? `${agent.description.substring(0, 25)}...`
              : agent.description}
          </Typography>
        </Stack>
        
      </Stack>
    </StyledCard></Link>
  );
};

export default ListingCard;
