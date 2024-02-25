import { auth } from '@/auth';
import { LinkButton } from '@/components/ui/LinkButton';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='mb-12'>main page</h1>
      {session ? (
        <LinkButton href='/my-page'>myPage</LinkButton>
      ) : (
        <LinkButton href='/login'>Login</LinkButton>
      )}
    </main>
  );
}
