import { Box, Heading, Text } from '@chakra-ui/react';
import type { User } from '@prisma/client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Alert } from './alert';
import { App } from './app';
import { useApps, useVisible } from './app-store';
import { Friends } from './apps/friends';

export function Dashboard(props: { user: User }) {
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
          // flexDir="column"
          position="absolute"
          width="95vw"
          height="90vh"
          pointerEvents="none"
        >
          <Box flex={1} gap="15px">
            <Box display="flex" gap="20px" flexDir="column">
              {Object.entries(apps.apps).map(([name, CurrentApp]) => (
                <AnimatePresence key={name}>
                  <CurrentApp />
                </AnimatePresence>
              ))}
            </Box>
          </Box>
          <Box flex={1} display="flex" justifyContent="flex-end">
            <AlertWithKey user={props.user} />
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}

function AlertWithKey(props: { user: User }) {
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === 'a') {
        setAlertVisible(s => !s);
      }
    };

    window.addEventListener('keypress', listener);

    return () => window.removeEventListener('keypress', listener);
  }, []);

  return (
    <AnimatePresence>
      {alertVisible && <Alert user={props.user} />}
    </AnimatePresence>
  );
}
