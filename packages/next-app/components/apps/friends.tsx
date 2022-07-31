import { Box, Heading, Text } from '@chakra-ui/react';
import { App } from '../app';

function Friend() {
  return (
    <Box
      display="flex"
      backgroundColor="rgba(231, 231, 231, 0.19)"
      borderRadius="6px"
      flex={1}
    >
      <Box
        as="img"
        src="/avatars/1.jpg"
        height="60px"
        width="60px"
        objectFit="cover"
        borderRadius="6px 0 0 6px"
        objectPosition="center"
      />
      <Box h="full" pl="3" display="flex" alignItems="center">
        <Text fontSize="md" color="white">
          John Doe
        </Text>
      </Box>
    </Box>
  );
}

export function Friends() {
  return (
    <App title="Friends" appId="friends">
      <Box
        mb="4"
        as="input"
        minHeight="4vh"
        borderRadius="50px"
        width="100%"
        backgroundColor="rgba(231, 231, 231, 0.29)"
        padding="3px 20px"
        fontWeight={400}
        fontSize="md"
        color="white"
        placeholder="Search John.."
        _placeholder={{ color: 'white', fontSize: 'md' }}
        _focus={{ outline: 'none' }}
        outline="none"
      />
      <Box display="flex" flexDir="column" gap={3}>
        <Box display="flex" gap={3}>
          <Friend />
          <Friend />
        </Box>
        <Box display="flex" gap={3}>
          <Friend />
          <Friend />
        </Box>
        <Box display="flex" gap={3}>
          <Friend />
          <Friend />
        </Box>
      </Box>
    </App>
  );
}
