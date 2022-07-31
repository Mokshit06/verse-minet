import { Box, Heading, Text } from '@chakra-ui/react';
import { App } from '../app';
import { useCurrentPlace } from '../app-store';

export function Teleport() {
  return (
    <App title="Teleport" width="45vw" appId="teleport">
      <Box display="flex" gap={3}>
        <Place name="Tree house" modelId="479b5f3c493349b18c59dbcbe354d98f" />
        <Place
          name="Mystical Forst"
          modelId="7c61edc428a24b188633e526616a729c"
        />
      </Box>
    </App>
  );
}

function Place(props: { modelId: string; name: string }) {
  const place = useCurrentPlace();
  return (
    <Box cursor="pointer" onClick={() => place.setModelId(props.modelId)}>
      <Box
        border="1px solid #dddddd56"
        borderRadius="9px"
        as="img"
        src={`/${props.modelId}.jpg`}
      />
      {/* <Box
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
          {props.name}
        </Text>
      </Box> */}
    </Box>
  );
}
