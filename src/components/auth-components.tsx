import { signOut } from '@/auth';

import Link from 'next/link';

export function SignIn(
  props: Omit<React.ComponentPropsWithRef<typeof Link>, 'href'>
) {
  return (
    <Link {...props} href='api/auth/signin'>
      <button>Sign In</button>
    </Link>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
      className='w-full'
    >
      <button className='px-2 py-1 rounded bg-red-500'>Sign Out</button>
    </form>
  );
}
