export type ProductPriceProps = {
  price: number;
};

export function ProductPrice(props: ProductPriceProps) {
  const { price } = props;
  return <p>${price.toLocaleString()}</p>;
}
