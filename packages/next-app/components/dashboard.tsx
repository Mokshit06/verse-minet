import { Box, Heading, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Alert } from './alert';
import { App } from './app';
import { useApps, useVisible } from './app-store';
import { Friends } from './apps/friends';

export function Dashboard() {
  const apps = useApps();
  const visible = useVisible();

  return (
    <AnimatePresence>
      {visible.visible === 'apps' && (
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 } as any}
          exit={{ opacity: 0 }}
          display="flex"
          flexDir="column"
          gap="15px"
          position="absolute"
          width="95vw"
          height="90vh"
          pointerEvents="none"
        >
          <Box display="flex" gap="15px">
            {Object.entries(apps.apps).map(([name, CurrentApp]) => (
              <AnimatePresence key={name}>
                <CurrentApp />
              </AnimatePresence>
            ))}
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}
