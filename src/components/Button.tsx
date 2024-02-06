import { ButtonHTMLAttributes } from 'react';

export type Button = ButtonHTMLAttributes<any> & {
  text: string;
};

export function Button(props: Button) {
  const { text, children, className, ...restProps } = props;

  return (
    <button {...restProps} className={'border border-black text-black px-2 '}>
      {text}
    </button>
  );
}
