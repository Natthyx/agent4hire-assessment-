'use client';

import React, { useState } from 'react';
import { AppBar, Button, CssBaseline, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Toolbar, Typography, Collapse, useTheme, ListItemIcon } from '@mui/material';
import { Menu, ExpandLess, ExpandMore, Close } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginPopup from '../loginpopup/LoginPopup'; // Import the LoginPopup component
import Link from 'next/link';
import mainlogo from '@/public/assets/Mainlogo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { format, isToday, isYesterday, differenceInDays } from 'date-fns';
import { Stack } from '@mui/system';
import Divider from '@mui/material/Divider';

interface MainLayoutProps {
  children: React.ReactNode;
}
// Sample chat history data with timestamps
const chatHistory = [
  { id: 1, message: "Set-up virtual environment", timestamp: new Date() },
  { id: 2, message: "Reviewed code structure", timestamp: new Date(Date.now() - 86400000) }, // Yesterday
  { id: 3, message: "Checked in with team", timestamp: new Date(Date.now() - 2 * 86400000) }, // 2 days ago
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [marketplaceOpen, setMarketplaceOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false); // State to control login popup
  const pathname = usePathname();
  
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMarketplaceClick = () => {
    setMarketplaceOpen(!marketplaceOpen);
  };

  const handleLoginClick = () => {
    setLoginPopupOpen(true); // Open the login popup when Sign In button is clicked
  };

  const handleLoginPopupClose = () => {
    setLoginPopupOpen(false); // Close the login popup
  };

  // Filter chat history by date categories
  const todayChats = chatHistory.filter(chat => isToday(chat.timestamp));
  const yesterdayChats = chatHistory.filter(chat => isYesterday(chat.timestamp));
  const last30DaysChats = chatHistory.filter(chat => 
    differenceInDays(new Date(), chat.timestamp) > 1 && differenceInDays(new Date(), chat.timestamp) <= 30
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" 
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
      }}
      >
        <Toolbar disableGutters className="flex justify-between w-[90%] m-auto">
          <div className="flex items-center">
            <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen}>
              <Menu />
            </IconButton>
            <Link href='/'>
            <Image 
            src={mainlogo}
            width={60}
            alt={'main logo'}
            >
              </Image></Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-700 items-center rounded px-2 py-1">
              <SearchIcon />
              <InputBase placeholder="Search" className="ml-2 text-white" />
            </div>
            <Button variant="text" color="inherit" onClick={handleLoginClick} className='font-roboto font-[20px]'>Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>
      {pathname !=='/chatpage' && (
        <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#0D0B21',
            color: '#ffffff',
          },
        }}
      >
        <div className="flex justify-between items-center p-2">
          <Typography variant="h6" className="font-PassionOne text-[25px]" sx={{ paddingTop: '5rem', ml: 5 }}>
            Agent 4 Hire
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <Close sx={{ color: '#ffffff', fontWeight: "bold" }} />
          </IconButton>
        </div>
        <Divider />
        <List sx={{ pl: 4, lineHeight: 12 }}>
          <ListItem>
            <Link href='/createAgent'><ListItemText className="font-PassionOne text-[25px]" primary="Agent Builder" /></Link>
          </ListItem>

          <ListItem onClick={handleMarketplaceClick}>
            <ListItemText primary="Marketplace" />
            {marketplaceOpen ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={marketplaceOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary="Popular" />
              </ListItem>
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary="Business" />
              </ListItem>
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary="Educational" />
              </ListItem>
            </List>
          </Collapse>

          <Link href='/profilepage'><ListItem> 
            <PersonIcon sx={{ color: '#ffffff', mr:2 }} />
            <ListItemText primary="Profile" />
          </ListItem></Link>
        </List>
        <Divider />
        <List sx={{ position: "absolute", bottom: 0, alignItems: 'center', pl: 4 }}>
          <ListItem>
            <ListItemIcon><ExitToAppIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      )}

      {/* Drawer for chat page */}
      {pathname === '/chatpage' && (
        <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#08051E',
            color: '#ffffff',
          },
        }}
      >
        <div className="flex justify-between items-center p-2">
          <Typography variant="h6" className="font-bold" sx={{ paddingTop: '3rem', ml: 3 }}>
            Agent 4 Hire
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <Close sx={{ color: '#ffffff' }} />
          </IconButton>
        </div>
        <Stack>
        <Link href='/'><Typography variant="h6" className="font-bold" sx={{ paddingTop: '3rem', ml: 3 }}>Explore</Typography></Link>
          <Divider  sx={{
            width:400,
            pl:3

          }}/>
          <Link href='/dashboard'><Typography variant="h6" className="font-bold" sx={{ ml: 3 }}>Dashboard
          </Typography></Link>
        </Stack>
        <Divider />
        <List sx={{ pl: 2, lineHeight: 8 }}>
          {/* Today section */}
          {todayChats.length > 0 && (
            <>
              <Typography variant="subtitle1" sx={{ color: '#888', mt: 2 }}>Today</Typography>
              {todayChats.map(chat => (
                <ListItem key={chat.id}>
                  <ListItemText primary={chat.message} />
                </ListItem>
              ))}
            </>
          )}

          {/* Yesterday section */}
          {yesterdayChats.length > 0 && (
            <>
              <Typography variant="subtitle1" sx={{ color: '#888', mt: 2 }}>Yesterday</Typography>
              {yesterdayChats.map(chat => (
                <ListItem sx={{width:300}} key={chat.id}>
                  <ListItemText primary={chat.message} />
                </ListItem>
              ))}
            </>
          )}

          {/* Previous 30 Days section */}
          {last30DaysChats.length > 0 && (
            <>
              <Typography variant="subtitle1" sx={{ color: '#888', mt: 2 }}>Previous 30 Days</Typography>
              {last30DaysChats.map(chat => (
                <ListItem key={chat.id}>
                  <ListItemText
                    primary={chat.message}
                  />
                </ListItem>
              ))}
            </>
          )}
        </List>
        <Divider />
        <List sx={{ position: "absolute", bottom: 0, alignItems: 'center', pl: 4 }}>
          <ListItem>
            <IconButton><ExitToAppIcon sx={{ color: '#ffffff' }} /></IconButton>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      )}

      <LoginPopup open={loginPopupOpen} onClose={handleLoginPopupClose} /> {/* Add the LoginPopup component */}

      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
