import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

export function Alert(props: BoxProps) {
  return (
    <Box
      // background="rgba(255, 255, 255, 0.18)"
      // borderRadius="8px"
      // boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      // backdropFilter="blur(8.9px)"
      // border="1.3px solid rgba(255, 255, 255, 0.33)"
      backdropFilter="blur(11px) saturate(180%)"
      backgroundColor="rgba(226, 69, 67, 0.65)"
      borderRadius="12px"
      border="1px solid rgba(255, 103, 100, 0.181)"
      padding="18px 20px"
      flex={1}
      pointerEvents="all"
      {...props}
    />
  );
}
