'use client';

import { Input } from '@shiva/components/Input';
import { Button } from '@shiva/components/Button';
import { ChangeEvent, ChangeEventHandler, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setPasswordInput, setUsernameInput } from '@shiva/redux/modules/auth';
import users from '@shiva/db/user.json';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const router = useRouter();
  const handleLogin = (e: FormEvent) => {
    console.log(authState, 'manm');
    e.preventDefault();
    const foundUser = users.data.find((user) => user.username === authState.usernameInput);
    if (foundUser && foundUser.password === authState.passwordInput) {
      dispatch(loginUser(foundUser));
      router.push('/dashboard');
    } else {
      alert('user name or password is correct ');
    }
  };
  const handChangeUsername = (e: ChangeEvent<any>) => {
    dispatch(setUsernameInput(e.target.value));
  };

  const handleChangePassword = (e: ChangeEvent<any>) => {
    dispatch(setPasswordInput(e.target.value));
  };
  return (
    <form className="border rounded-md p-4 mx-auto w-[400px]" onSubmit={handleLogin}>
      <div className={'border-2 border-r-6 border-blue-950 w-[300px]  '}>
        <Input
          placeholder={'please enter name'}
          value={authState.usernameInput}
          onChange={handChangeUsername}
        />
        <Input
          placeholder={'please enter password'}
          value={authState.passwordInput}
          onChange={handleChangePassword}
        />
        <Button text={'login'} />
        <Button text={'logout'} onChange={handleLogin} />
      </div>
    </form>
  );
}
