'use client';

import { useSelector } from 'react-redux';
import ProductCounter from '@shiva/components/Products/ProductCounter';
import { ProductPrice } from '@shiva/components/Products/ProductPrice';
import { Input } from '@shiva/components/Input';
import { useState } from 'react';
import { ProductItem } from '@shiva/components/Products/ProductItem';

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
        {/* <div className="grid-cols-3 grid gap-4 p-8 mx-4">
          <div>
            <ProductItem image="/images/iphone12.jpeg" price={500} title="iPhone12" className="" />
          </div>
          <div>
            <ProductItem image="/images/iphone13.jpeg" price={700} title="iPhone13" className="" />
          </div>
          <div>
            <ProductItem image="/images/iphone15.jpeg" price={1000} title="iPhone15" className="" />
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.data.map((product) => (
            <ProductItem
              title={product.name}
              image={product.image}
              key={product.id}
              price={product.price}
              productId={product.id}
              quantity={products.cart.find((item) => item.productId === product.id)?.quantity ?? 0}
            />
          ))}
        </div>
      </div>
      <div className="col-span-2 mt-16 w-80 border rounded-lg h-40 px-4">
        {products.cart.length ? (
          products.cart.map((item) => {
            const productDetails = products.data.find((product) => product.id === item.productId);
            return (
              <div key={item.productId} className="pb-4">
                <div>{productDetails?.name}</div>
                <div className="bg-black">
                  <ProductPrice price={productDetails.price} />
                </div>
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
