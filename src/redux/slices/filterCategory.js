import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 1,
    titleCategory: [
        'Острое меню',
        'Кинг Комбо',
        'Кинг Сет',
        'Бургеры из говядины',
        'Бургеры из Курицы',
    ],
    loaded: true,
};

export const filterCategory = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        changeCategory(state, action) {
            state.categoryId = action.payload;
        },
        setLoaded(state, action) {
            state.loaded = action.payload;
        },
    },
});

export const { changeCategory, setLoaded } = filterCategory.actions;

export default filterCategory.reducer;
