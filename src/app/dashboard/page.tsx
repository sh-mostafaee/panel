'use client';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@shiva/redux/modules/auth';
import Link from 'next/link';

export default function DashboardPage() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
