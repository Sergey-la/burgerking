import { configureStore } from '@reduxjs/toolkit';
import filterCategory from './slices/filterCategory';

export const store = configureStore({
    reducer: {
        filterCategory,
    },
});
