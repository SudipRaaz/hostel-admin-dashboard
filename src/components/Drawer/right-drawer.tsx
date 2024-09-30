"use client";

import { UseButtonStateStore } from '@/store/button-state-store';
import React, { ReactNode, useEffect } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

interface RightDrawerProps {
  children?: ReactNode;
    isDrawerOpen?: boolean;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ children , isDrawerOpen}) => {
    const { setIsDrawerOpen}= UseButtonStateStore();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log('Drawer is open');
  };

  return (
    <>
      <Drawer
        open={isDrawerOpen || false}
        onClose={toggleDrawer}
        direction='right'
        className='mt-[100px]  min-h-[90vh] bg-white'
        size={400}
        zIndex={1000000}
       
      >
        <div>{children}</div>
      </Drawer>
    </>
  );
};

export default RightDrawer;