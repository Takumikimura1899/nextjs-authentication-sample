import { auth } from '@/auth';
import { SignIn } from '@/components/auth-components';

export default async function Login() {
  const session = await auth();
  return session ? <h1>Logged in</h1> : <SignIn />;
}
