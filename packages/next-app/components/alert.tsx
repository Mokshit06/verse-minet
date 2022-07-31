import { Box, BoxProps, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import type { User } from '@prisma/client';

export function Alert(props: BoxProps & { user: User }) {
  return (
    <Box
      as={motion.div}
      transition={{ duration: 0.25 } as any}
      exit="closed"
      animate="open"
      initial="closed"
      variants={{
        open: { opacity: 1, scale: 1 },
        closed: { opacity: 0, scale: 0.8 },
      }}
      backdropFilter="blur(11px) saturate(180%)"
      backgroundColor="rgba(255, 231, 160, 0.687)"
      borderRadius="12px"
      border="1px solid rgba(255, 233, 168, 0.887)"
      padding="22px 24px"
      flex={1}
      position="relative"
      height="min-content"
      mt="4"
      mr="3"
      pointerEvents="all"
      maxWidth="30vw"
      {...props}
    >
      <svg
        viewBox="0 0 22.6 26.05"
        style={{
          position: 'absolute',
          top: -40,
          right: 0,
          height: 70,
          width: 70,
          animationName: 'wave-animation',
          animationDuration: '2.5s',
          animationIterationCount: 'infinite',
          transformOrigin: '70% 70%',
        }}
      >
        <path d="M19.57,17.77a7.51,7.51,0,0,1-6.87,4.55c-2.57,0-4.72-1.84-6.08-3.4a30.68,30.68,0,0,1-3.71-6c-.35-1-.38-1.61,0-1.94s1.14-.09,1.55.42,3,3.93,3.08,4.1A.38.38,0,0,0,8,15.7a.39.39,0,0,0,.05-.55l-4.22-6a1.17,1.17,0,0,1,.29-1.66,1.24,1.24,0,0,1,1.7.29l3.58,4.89a.34.34,0,0,0,.48.14c.17-.12.12-.36,0-.53L5.84,6.13a1.17,1.17,0,0,1,.29-1.66,1.23,1.23,0,0,1,1.7.29l4.36,6.38c.12.16.34.29.51.17s.1-.37,0-.55C12.15,9.85,10.24,6.58,9.92,6s-.39-1.16,0-1.43,1.25-.13,2.34,1a36.34,36.34,0,0,1,3.54,5.22,1.81,1.81,0,0,0,.32.41c.42.41.71.33.89-.06s.42-3.16,2-3.1c.57,0,1,.57,1.21,2a14.31,14.31,0,0,1-.7,7.71m2.77-8C22,7.31,20.87,6.05,19.13,6A3.29,3.29,0,0,0,16.2,7.46a24.49,24.49,0,0,0-2.38-3.28c-2.22-2.39-4-2.08-5-1.38a3.37,3.37,0,0,0-3.86-.07A3.27,3.27,0,0,0,3.51,5.5,3.26,3.26,0,0,0,1.58,7.93a3.46,3.46,0,0,0,0,1.4l-.17.15c-1,1-1.21,2.38-.52,4.23A32.41,32.41,0,0,0,5,20.3c2.39,2.74,5,4.13,7.67,4.13a9.57,9.57,0,0,0,8.82-5.87,16.27,16.27,0,0,0,.82-8.84"></path>
        <path
          fill="#FFD14D"
          d="M19.57,17.77a14.31,14.31,0,0,0,.7-7.71c-.24-1.4-.64-2-1.21-2-1.61-.06-1.8,2.62-2,3.1s-.47.47-.89.06a1.81,1.81,0,0,1-.32-.41,36.34,36.34,0,0,0-3.54-5.22c-1.09-1.18-1.82-1.41-2.34-1s-.33.85,0,1.43,2.23,3.85,2.78,4.76c.1.18.17.43,0,.55s-.39,0-.51-.17L7.83,4.76a1.23,1.23,0,0,0-1.7-.29,1.17,1.17,0,0,0-.29,1.66l4.07,6.2c.12.17.17.41,0,.53a.34.34,0,0,1-.48-.14L5.85,7.83a1.24,1.24,0,0,0-1.7-.29A1.17,1.17,0,0,0,3.86,9.2l4.22,6A.39.39,0,0,1,8,15.7a.38.38,0,0,1-.52-.15c-.12-.17-2.58-3.5-3.08-4.1s-1-.87-1.55-.42-.32,1,0,1.94a30.68,30.68,0,0,0,3.71,6c1.36,1.56,3.51,3.4,6.08,3.4a7.51,7.51,0,0,0,6.87-4.55"
        ></path>
        <path
          fill="#FFB73B"
          d="M17.31,17.3a10.21,10.21,0,0,1-1-4,.53.53,0,0,0-.53-.53.52.52,0,0,0-.52.53,11.3,11.3,0,0,0,1.11,4.5.53.53,0,0,0,.72.21.52.52,0,0,0,.21-.71M14.12,13a.52.52,0,0,1-.13.73,11.94,11.94,0,0,0-3,3.57.52.52,0,1,1-.9-.54,12.78,12.78,0,0,1,3.3-3.88.53.53,0,0,1,.74.12"
        ></path>
        <path
          fill="#7F7F7F"
          d="M6,25.06a11.86,11.86,0,0,1-5-5.55.53.53,0,1,0-1,.34A12.83,12.83,0,0,0,5.56,26,.52.52,0,1,0,6,25.06M18.12,4.2a.53.53,0,0,1-.7-.26A7.6,7.6,0,0,0,14,1a.53.53,0,0,1-.32-.67A.53.53,0,0,1,14.39,0a8.58,8.58,0,0,1,4,3.47.53.53,0,0,1-.26.7"
        ></path>
      </svg>
      <Heading mb="3" fontSize="3xl">
        Hello {props.user.name}!
      </Heading>
      <Text fontWeight={400} fontSize="lg">
        You haven&apos;t met John in a few days and have been playing{' '}
        <b>Beat Saber</b> for 4+ hours every day. Maybe it&apos;s a good time to
        go reconnect with your friends and have some physical activity?
      </Text>
      <br />
      <Text fontWeight={400} fontSize="lg">
        Would you like to take some action to stop that?
      </Text>
      <Box mt="3" display="flex" gap="2" flexWrap="wrap">
        <Button colorScheme="green">Turn on Digital Wellbeing</Button>
        <Button colorScheme="linkedin">Call John</Button>
        <Button colorScheme="purple">Disable Beat Saber</Button>
      </Box>
    </Box>
  );
}
