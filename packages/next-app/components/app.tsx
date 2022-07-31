import { Box, BoxProps, Button, Heading } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useApps } from './app-store';

export function App({
  appId,
  title,
  children,
  ...props
}: BoxProps & { title: string; appId: string }) {
  const apps = useApps();

  return (
    <Box
      as={motion.div}
      // initial="closed"
      transition={{ duration: 0.2 } as any}
      animate={
        apps.currentApp === null
          ? 'open'
          : apps.currentApp === appId
          ? 'enlarged'
          : 'closed'
      }
      variants={{
        open: { opacity: 1, scale: 1 },
        enlarged: { opacity: 1, scale: 1.04 },
        closed: { opacity: 0, scale: 0.9 },
      }}
      backdropFilter="blur(8.4px) saturate(180%)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      backgroundColor="rgba(221, 221, 221, 0.29)"
      borderRadius="12px"
      border="1px solid rgba(255, 255, 255, 0.3)"
      padding="20px 22px"
      flex={1}
      pointerEvents="all"
      onClick={() => apps.setCurrentApp(appId)}
      {...props}
    >
      <Box display="flex" gap="2" mb="3">
        <AnimatePresence>
          {apps.currentApp === appId && (
            <Box
              as="button"
              onClick={
                ((e: any) => {
                  e.stopPropagation();
                  apps.setCurrentApp(null);
                }) as any
              }
            >
              <svg
                height="30px"
                id="Layer_1"
                style={
                  { enableBackground: 'new 0 0 512 512', fill: 'white' } as any
                }
                version="1.1"
                viewBox="0 0 512 512"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
              </svg>
            </Box>
          )}
        </AnimatePresence>
        <Heading as="h2" fontSize="2xl" fontWeight="medium" color="white">
          {title}
        </Heading>
      </Box>
      {children}
    </Box>
  );
}
