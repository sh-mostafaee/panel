import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '@shiva/redux/modules/products';

export type ProductCounterProps = {
  productId: number;
  quantity: number;
};

export default function ProductCounter(props: ProductCounterProps) {
  const { productId, quantity } = props;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(productId));
  };
  const handleRemove = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={'flex items-center justify-center'}>
      <button
        className={'border rounded-full w-[20px] h-[20px] flex items-center justify-center '}
        onClick={handleRemove}
      >
        -
      </button>
      <p className={'border rounded-full w-[20px] h-[20px] flex items-center justify-center'}>
        {quantity}
      </p>
      <button
        className={'border rounded-full w-[20px] h-[20px] flex items-center justify-center'}
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  );
}
