'use client';

import { Button } from '@shiva/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  applyCountInput,
  increaseOne,
  increaseTen,
  minusOne,
  minusTen,
  reset,
  setChangeInput,
  setCountInput,
} from '@shiva/redux/modules/counter';
import { Input } from '@shiva/components/Input';

export default function CounterPage() {
  const dispatch = useDispatch();

  const handlePlusOne = () => {
    dispatch(increaseOne());
  };
  const handlePlusTen = () => {
    dispatch(increaseTen());
  };
  const handleMinusOne = () => {
    dispatch(minusOne());
  };
  const handleMinusTen = () => {
    dispatch(minusTen());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleCountInputChange = (e) => {
    dispatch(setCountInput(Number(e.target.value)));
  };

  const handleApply = () => {
    dispatch(applyCountInput());
  };
  const handleChangeInputChange = (e) => {
    dispatch(setChangeInput(Number(e.target.value)));
  };

  const counterState = useSelector((state) => state.counter);
  console.log(counterState, 'pis pis');
  return (
    <div>
      <h1>count: {counterState.count}</h1>
      <Button text={'plus 1'} onClick={handlePlusOne} />
      <Button text={'plus 10'} onClick={handlePlusTen} />
      <Button text={'minus 1'} onClick={handleMinusOne} />
      <Button text={'minus 10'} onClick={handleMinusTen} />
      <Button text={'reset'} onClick={handleReset} />
      <div>
        <Input
          placeholder={'enter your number here'}
          value={counterState.countInput}
          onChange={handleCountInputChange}
        />
        <Button text={'apply'} onClick={handleApply} />
      </div>
      <div>
        <Input
          placeholder={'please enter your number'}
          value={counterState.changeInput}
          onChange={handleChangeInputChange}
        />
        <Button text={'change now'} />
      </div>
    </div>
  );
}
