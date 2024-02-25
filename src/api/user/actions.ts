import { PrismaClient, type User } from '@prisma/client';
const prisma = new PrismaClient();

type Credentials = Pick<User, 'email' | 'password'>;

export const getUser = async ({
  email,
  password,
}: Credentials): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });

  return user || null;
};
