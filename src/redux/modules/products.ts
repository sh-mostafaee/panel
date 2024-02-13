export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export type ProductsAction = {
  type: string;
  payload: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type CartItem = {
  productId: number;
  quantity: number;
};

export type ProductsState = {
  data: Product[];
  cart: CartItem[];
};

export const addToCart = (payload: number) => ({
  type: ADD_TO_CART,
  payload,
});
export const removeFromCart = (payload: number) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const productsInitialState: ProductsState = {
  data: [
    {
      id: 1,
      name: 'iPhone 15',
      price: 20000,
      image: '/images/iphone15.webp',
    },
    {
      id: 2,
      name: 'iPhone 12',
      price: 4444,
      image: '/images/iphone12.webp',
    },
    {
      id: 3,
      name: 'iPhone 13',
      price: 2546,
      image: '/images/iphone13.webp',
    },
    {
      id: 4,
      name: 'Samsung Note3',
      price: 10000,
      image: '/images/iphone15.webp',
    },
    {
      id: 5,
      name: 'LG',
      price: 48592,
      image: '/images/lg.webp',
    },
    {
      id: 6,
      name: 'Sumsung a10',
      price: 30000,
      image: '/images/samsung a10.webp',
    },
    {
      id: 7,
      name: 'Sumsung a20',
      price: 88890,
      image: '/images/samsung a20.webp',
    },
  ],
  cart: [],
};

export const productsReducer = (
  state: ProductsState = productsInitialState,
  action: ProductsAction
) => {
  if (action.type === ADD_TO_CART) {
    const foundItem = state.cart.find((item) => item.productId === action.payload);

    if (foundItem) {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.productId === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { productId: action.payload, quantity: 1 }],
      };
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    const foundItem = state.cart.find((item) => item.productId === action.payload);
    if (foundItem?.quantity && foundItem.quantity >= 2) {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.productId === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        }),
      };
    } else if (foundItem?.quantity === 1) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload),
      };
    } else {
      return state;
    }
  }
  return state;
};
