import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function getMe() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) redirect('/sign-in');

  const response = await fetch('http://localhost:3000/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) redirect('/sign-in');

  return response.json();
}
