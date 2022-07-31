import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';

export default async function authHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const { publicAddress, name, email } = req.body;

    if (!publicAddress || !name || !email) {
      return res
        .status(400)
        .json({ error: 'Missing publicAddress, name, or email' });
    }

    const user = await prisma.user.findUnique({ where: { publicAddress } });

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        publicAddress,
        name,
      },
    });

    return res.status(201).json({ message: 'User created!' });
  }

  return res.status(400).json({ error: 'Only POST requests allowed' });
}
