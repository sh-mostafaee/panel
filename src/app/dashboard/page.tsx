'use client';
import { useAppDispatch, useAppSelector } from '@shiva/hooks/redux';
import { logoutUser } from '@shiva/redux/modules/auth';
import Link from 'next/link';

export default function DashboardPage() {
  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      this is dashboard test shiva
      <Link href="/dashboard/products/page" />
      <button className="bg-blue white px-4 py-2 rounded-md">Log out</button>
    </div>
  );
}
