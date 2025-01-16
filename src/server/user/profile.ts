'use server';

import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { User } from '@/types/user.types';

export const getProfile = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  if (!accessToken) return null;
  const decoded = jwtDecode(accessToken);
  const userId = decoded.sub;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: { Cookie: cookieStore.toString() },
    },
  );
  const data = (await response.json()) as User;
  return data;
};
