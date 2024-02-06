export const TOGGLE_CHECK = 'TOGGLE_CHECK';
export const ADD_PROMO_CODE = 'ADD_PROMO_CODE';
export const DELETE_PROMO_CODE = 'DELETE_PROMO_CODE';
export const toggleCheck = (payload: string) => ({
  type: TOGGLE_CHECK,
  payload,
});

export const addPromoCode = (payload: string) => ({
  type: ADD_PROMO_CODE,
  payload,
});
export const deletePromoCode = (payload: string) => ({
  type: DELETE_PROMO_CODE,
  payload,
});

export type PromoCheck = {
  name: string;
  value: boolean;
  title: string;
};
export type PromoAction = {
  type: string;
  payload: string;
};

export type PromoState = {
  checks: PromoCheck[];
  codes: string[];
};

const promoInitialState: PromoState = {
  checks: [
    {
      name: 'capitals',
      value: true,
      title: 'Capital Letters',
    },
    {
      name: 'smalls',
      value: true,
      title: 'Small Letters',
    },
    {
      name: 'characters',
      value: false,
      title: 'Characters',
    },
    {
      name: 'numbers',
      value: false,
      title: 'Numbers',
    },
  ],
  codes: [],
};

export const promoReducer = (state: PromoState = promoInitialState, action: PromoAction) => {
  if (action.type === TOGGLE_CHECK) {
    return {
      ...state,
      checks: state.checks.map((item) => {
        if (item.name === action.payload) {
          return {
            ...item,
            value: !item.value,
          };
        } else {
          return item;
        }
      }),
    };
  }

  if (action.type === ADD_PROMO_CODE) {
    return {
      ...state,
      codes: [...state.codes, action.payload],
    };
  }
  if (action.type === DELETE_PROMO_CODE) {
    return {
      ...state,
      codes: state.codes.filter((code) => code !== action.payload),
    };
  }

  return state;
};
