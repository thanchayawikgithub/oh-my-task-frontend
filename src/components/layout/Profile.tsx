'use client';

import { getProfile } from '@/server/user/profile';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query-key';
import Image from 'next/image';

export default function Profile() {
  const { data: user } = useQuery({
    queryKey: QUERY_KEY.USER.PROFILE,
    queryFn: () => getProfile(),
  });

  if (!user) return null;

  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image width={40} height={40} src={user.avatarUrl} alt="avatar" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile {user?.firstName} {user?.lastName}
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
