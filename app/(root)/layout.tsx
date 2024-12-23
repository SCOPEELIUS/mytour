"use client";

import React from 'react';
import SideBar from './(main)/maincomponents/sidebar';
import { Box, CssBaseline, styled, useTheme } from '@mui/material';
import MyAppBar from './(main)/maincomponents/appbar';

// Styled DrawerHeader to adjust layout below the AppBar
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // Necessary for content to be below the AppBar
  ...theme.mixins.toolbar,
}));

// Layout Component
function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  // Function to handle drawer toggle
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Provides global CSS baseline for Material-UI */}
      <CssBaseline />

      {/* AppBar with toggleDrawer function */}
      <MyAppBar onToggledrawer={toggleDrawer} open={open} />

      {/* Sidebar with toggleDrawer function */}
      <SideBar onToggledrawer={toggleDrawer} open={open} />

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Ensures proper spacing below AppBar */}
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
