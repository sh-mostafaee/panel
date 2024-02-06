'use client';

import { useSelector } from 'react-redux';
import ProductCounter from '@shiva/components/Products/ProductCounter';
import { ProductPrice } from '@shiva/components/Products/ProductPrice';
import { Input } from '@shiva/components/Input';
import { useState } from 'react';

export default function Products() {
  const products = useSelector((state) => state.products);
  const [promoInput, setPromoInput] = useState();
  const promoCodes = useSelector((state) => state.promo.codes);
  const [applyPromo, setApplyPromo] = useState(false);

  console.log(promoCodes, 'promoCodes promoCodes');

  const totalPrice = products.cart.reduce((acc, item) => {
    const productDetails = products.data.find((product) => product.id === item.productId);
    acc += productDetails.price * item.quantity;
    return acc;
  }, 0);
  const totalPriceWithPromo = applyPromo ? totalPrice - totalPrice / 10 : totalPrice;
  const handleApplyPromo = () => {
    const foundPromoCode = promoCodes.find((item) => item === promoInput);
    if (foundPromoCode) {
      setApplyPromo(true);
    } else {
      setApplyPromo(false);
      alert('Promo code is not valid');
    }
  };

  console.log(products, 'injaaaaa');
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div className="col-span-1 md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.data.map((product) => (
            <div key={product.id} className={'border border-black'}>
              <p>{product.name}</p>
              <ProductPrice price={product.price} />
              <ProductCounter
                productId={product.id}
                quantity={products.cart.find((item) => item.productId === product.id)?.quantity ?? 0}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        {products.cart.length ? (
          products.cart.map((item) => {
            const productDetails = products.data.find((product) => product.id === item.productId);
            return (
              <div key={item.productId}>
                <div>{productDetails?.name}</div>
                <ProductPrice price={productDetails.price} />
                <ProductCounter productId={item.productId} quantity={item.quantity} />
              </div>
            );
          })
        ) : (
          <p>cart is empty</p>
        )}
        <hr />
        <Input
          value={promoInput}
          placeholder="Promo Code"
          onChange={(e) => setPromoInput(e.target.value)}
        />
        <button onClick={handleApplyPromo}>apply</button>
        <div>
          Total: <ProductPrice price={totalPriceWithPromo} />
        </div>
      </div>
    </div>
  );
}
