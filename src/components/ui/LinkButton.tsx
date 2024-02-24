import Link, { type LinkProps } from 'next/link';

export function LinkButton(props: LinkProps & { children: React.ReactNode }) {
  return (
    <Link
      {...props}
      className='bg-blue-500 text-white text-center px-2 py-1 rounded-md'
    >
      {props.children}
    </Link>
  );
}
