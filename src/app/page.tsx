import { LinkButton } from '@/components/ui/LinkButton';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>main page</h1>
      <div className='flex space-x-2'>
        <LinkButton href='/my-page'>go to myPage</LinkButton>
        <LinkButton href='/login'>Login</LinkButton>
      </div>
    </main>
  );
}
