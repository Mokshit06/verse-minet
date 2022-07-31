import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/db';

export default async function statsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.user;

  if (!userId) return res.status(400).json({ error: 'No user query passed' });

  const user = await prisma.user.findUnique({
    where: {
      publicAddress: userId as string,
    },
    select: {
      activity: true,
    },
  });

  return res.json(user);
}
