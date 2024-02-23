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

export function SignOut(props: any) {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
      className='w-full'
    >
      <button variant='ghost' className='w-full p-0' {...props}>
        Sign Out
      </button>
    </form>
  );
}
