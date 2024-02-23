import Link, { type LinkProps } from 'next/link';

export function LinkButton(props: LinkProps & { children: React.ReactNode }) {
  return (
    <Link
      {...props}
      className='bg-blue-500 text-white text-center p-2 rounded-md'
    >
      {props.children}
    </Link>
  );
}
