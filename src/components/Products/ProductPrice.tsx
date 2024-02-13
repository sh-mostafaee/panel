export type ProductPriceProps = {
  price: number;
};

export function ProductPrice(props: ProductPriceProps) {
  const { price } = props;

  <p>${price.toLocaleString()}</p>;
}
