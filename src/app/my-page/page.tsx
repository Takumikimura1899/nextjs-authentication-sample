import { auth } from '@/auth';
import { SignOut } from '@/components/auth-components';
import { LinkButton } from '@/components/ui/LinkButton';

export default async function MyPage() {
  const session = await auth();
  const { name, email } = session?.user || { name: '', email: '' };
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='mb-8'>My Page</h1>
      <h2 className='mb-6'>ユーザ情報</h2>
      <div className='space-y-4 mb-12'>
        <p>ユーザ名:{name}</p>
        <p>メールアドレス:{email}</p>
      </div>
      <div className='flex space-x-2'>
        <LinkButton href='/'>Home</LinkButton>
        <SignOut />
      </div>
    </main>
  );
}
