import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/actionTypes';

const initialState = {
    products: [
        {
            id: 1,
            name: 'Sun glassess',
            category: 'glass',
            quantity: 21,
            price: 342
        },
        {
            id: 2,
            name: 'Sun glassess',
            category: 'glass',
            quantity: 21,
            price: 342
        },
        {
            id: 3,
            name: 'Sun glassess',
            category: 'glass',
            quantity: 21,
            price: 342
        },
    ],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                users: state.products.filter((product) => product.id !== action.payload),
            };

        default:
            return state;
    }
};

export default productReducer;
