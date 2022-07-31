import { Box, Divider, useToast } from '@chakra-ui/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import { prisma } from '../lib/db';

declare const cookieStore: { set(name: string, value: string): void };

export default function Login() {
  const router = useRouter();
  const toast = useToast();

  return (
    <Box
      className="cover home"
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box className="login" mb="10">
        <h2>Login</h2>
        <button
          className="link"
          onClick={async () => {
            if (!(window as any).ethereum) {
              return toast({
                title: 'Please install MetaMask extension',
                status: 'error',
              });
            }

            const hash = await (window as any).ethereum.request({
              method: 'eth_requestAccounts',
            });
            try {
              await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                  publicAddress: hash[0],
                }),
              });

              cookieStore.set('publicAddress', hash[0]);
              await router.push('/demo');
            } catch (err) {
              toast({ title: "User doesn't exist", status: 'error' });
            }
          }}
        >
          Use Wallet
        </button>
      </Box>
      <Box className="login">
        <h2>Register</h2>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const name = form.get('name');

            if (!name || !email) {
              return toast({
                title: 'Please enter all fields',
                status: 'error',
              });
            }

            if (!(window as any).ethereum) {
              return toast({
                title: 'Please install MetaMask extension',
                status: 'error',
              });
            }

            const hash = await (window as any).ethereum.request({
              method: 'eth_requestAccounts',
            });
            try {
              await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({ email, name, publicAddress: hash[0] }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              cookieStore.set('publicAddress', hash[0]);
              await router.push('/demo');
            } catch (error) {
              toast({ title: 'User already exists', status: 'error' });
            }
          }}
        >
          <div className="inputs">
            <input placeholder="Enter Name" name="name" type="text" />
            <input placeholder="Enter Email" name="email" type="email" />
          </div>
          <button className="link" type="submit">
            Register
          </button>
        </form>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  const key = ctx.req.cookies.publicAddress;
  if (!key) {
    return { props: {} };
  }

  const user = await prisma.user.findUnique({ where: { publicAddress: key } });

  if (user) {
    return { redirect: { destination: '/demo', permanent: false } };
  }

  return { props: {} };
}
