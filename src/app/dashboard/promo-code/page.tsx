'use client';

import { addPromoCode, deletePromoCode, toggleCheck } from '@shiva/redux/modules/poromo';
import { useAppDispatch, useAppSelector } from '@shiva/hooks/redux';
import { ChangeEvent } from 'react';

const CAPITALS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const SMALLS = CAPITALS.join('').toLowerCase().split('');
const NUMBERS = '0123456789'.split('');
const CHARACTERS = '!@#$%^&'.split('');

const selectName = {
  capitals: CAPITALS,
  smalls: SMALLS,
  numbers: NUMBERS,
  characters: CHARACTERS,
};

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shuffle = (str: string) =>
  str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

const promoLength = 10;

export default function PromoCodePage() {
  const dispatch = useAppDispatch();
  const promoState = useAppSelector((state) => state.promo);

  const handleChangeCapitalAlphabets = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleCheck(e.target.name));
  };

  const handleGeneratePromoCode = () => {
    const haveAnyChecks = promoState.checks.filter((item) => item.value);

    if (haveAnyChecks.length === 0) {
      alert('please check at least one of the items');
      return;
    }

    const from = promoLength < 6 ? 1 : 2;
    const to = Math.ceil(promoLength / haveAnyChecks.length);

    const randoms: string[] = [];
    let randomIndexes = 0;
    haveAnyChecks.forEach((item, index) => {
      const isLastIndex = index === haveAnyChecks.length - 1;
      let randomIndex = 0;
      if (!isLastIndex) {
        randomIndex = getRndInteger(from, to);
        randomIndexes += randomIndex;
      } else {
        randomIndex = promoLength - randomIndexes;
      }

      for (let i = 0; i < randomIndex; i++) {
        const charactersToCalc = selectName[item.name];
        randoms.push(charactersToCalc[Math.floor(Math.random() * charactersToCalc.length)]);
      }
    });
    dispatch(addPromoCode(shuffle(randoms.join(''))));
  };

  return (
    <div>
      {promoState.checks.map((check) => (
        <div key={check.name}>
          <input
            type="checkbox"
            id={check.name}
            name={check.name}
            checked={check.value}
            onChange={handleChangeCapitalAlphabets}
          />
          <label htmlFor={check.name}>{check.title}</label>
        </div>
      ))}
      <button onClick={handleGeneratePromoCode}>Generate promo code</button>
      <div className={'border border-black'}>
        {promoState.codes.map((code) => (
          <div key={code}>
            <p>{code}</p>
            <button onClick={() => dispatch(deletePromoCode(code))}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
