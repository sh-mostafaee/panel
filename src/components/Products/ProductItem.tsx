import React from 'react';
import { ProductPrice } from './ProductPrice';
import ProductCounter from './ProductCounter';

export type ProductItemProp = {
  image: string;
  title: string;
  price: number;
  className?: string;
  productId: number;
  quantity: number;
};

export function ProductItem(props: ProductItemProp) {
  const { image, title, price, className, productId, quantity } = props;
  return (
    <div className="border rounded-sm shadow-lg ">
      <img src={image} alt={title} />
      <p className="text-center">{title}</p>

      <ProductPrice price={price} />
      <ProductCounter productId={productId} quantity={quantity} />
    </div>
  );
}
