import React from 'react';
import HeroSection from './components/HeroSection';
import SwiperComponent from './components/marketplace/CardSlider';
import saleperson from '@/./public/assets/saleperson.jpg';
import business from '@/./public/assets/business.jpg';
import businessman from '@/./public/assets/businessman.jpg';
const agents = [
  {
    name: 'John Doe',
    username: 'johndoe',
    description: 'Top-rated agent with a focus on client satisfaction.',
    logo: saleperson,
  },
  {
    name: 'Jane Smith',
    username: 'janesmith',
    description: 'Experienced agent specializing in property sales.',
    logo: business,
  },
  {
    name: 'Alice Brown',
    username: 'alicebrown',
    description: 'Expert in luxury real estate and investments.',
    logo: businessman,
  },
  {
    name: 'Bob Johnson',
    username: 'bobjohnson',
    description: 'Professional agent with a wealth of market knowledge.',
    logo: saleperson,
  },
  {
    name: 'Lisa White',
    username: 'lisawhite',
    description: 'Specialist in commercial real estate and leases.',
    logo: business,
  },
  {
    name: 'Michael Green',
    username: 'michaelgreen',
    description: 'Client-focused agent with a strategic approach.',
    logo: businessman,
  },
  {
    name: 'John Doe',
    username: 'johndoe',
    description: 'Top-rated agent with a focus on client satisfaction.',
    logo: saleperson,
  },
  {
    name: 'Jane Smith',
    username: 'janesmith',
    description: 'Experienced agent specializing in property sales.',
    logo: business,
  },
  {
    name: 'Alice Brown',
    username: 'alicebrown',
    description: 'Expert in luxury real estate and investments.',
    logo: businessman,
  },
  {
    name: 'Bob Johnson',
    username: 'bobjohnson',
    description: 'Professional agent with a wealth of market knowledge.',
    logo: saleperson,
  },
  {
    name: 'Lisa White',
    username: 'lisawhite',
    description: 'Specialist in commercial real estate and leases.',
    logo: business,
  },
  {
    name: 'Michael Green',
    username: 'michaelgreen',
    description: 'Client-focused agent with a strategic approach.',
    logo: businessman,
  },
  {
    name: 'John Doe',
    username: 'johndoe',
    description: 'Top-rated agent with a focus on client satisfaction.',
    logo: saleperson,
  },
  {
    name: 'Jane Smith',
    username: 'janesmith',
    description: 'Experienced agent specializing in property sales.',
    logo: business,
  },
  {
    name: 'Alice Brown',
    username: 'alicebrown',
    description: 'Expert in luxury real estate and investments.',
    logo: businessman,
  },
  {
    name: 'Bob Johnson',
    username: 'bobjohnson',
    description: 'Professional agent with a wealth of market knowledge.',
    logo: saleperson,
  },
  {
    name: 'Lisa White',
    username: 'lisawhite',
    description: 'Specialist in commercial real estate and leases.',
    logo: business,
  },
  {
    name: 'Michael Green',
    username: 'michaelgreen',
    description: 'Client-focused agent with a strategic approach.',
    logo: businessman,
  },
];

const Home = () => (
  <div className="bg-darkBg min-h-screen">
    <HeroSection />
    <main className="px-6 py-10 space-y-5 w-[90%] m-auto">
      <div>
      <h1 className='ml-5 text-2xl font-roboto font-semibold'>Popular Agents</h1>
      <SwiperComponent agents={agents} rows={2}/>
      </div>
      <div>
      <h1 className='ml-5 text-2xl font-roboto font-semibold'>Business Agents</h1>
      <SwiperComponent agents={agents} rows={2}/>
      </div>
      <div>
      <h1 className='ml-5 text-2xl font-roboto font-semibold'>New Agents</h1>
      <SwiperComponent agents={agents} rows={1}/>
      </div>
      
    </main>
  </div>
);

export default Home;

