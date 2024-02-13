'use client';

import { useAppSelector } from '@shiva/hooks/redux';
import { useState } from 'react';

export default function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user, 'inja');
  return (
    <div className={'border rounded px-4 py-2'}>
      <h1>welcome dear</h1>
      <h1>Name: {user?.name}</h1>
      <h1>username: {user?.username}</h1>
      <h1>password: {user?.password}</h1>
    </div>
  );
}
