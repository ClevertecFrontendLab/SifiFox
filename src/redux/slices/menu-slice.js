import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  burgerActive: false,
  menuActive: true,
  innerMenuActive: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuActive(state) {
      state.burgerActive = !state.burgerActive;
      state.menuActive = !state.menuActive;
    },
    hideMenu(state) {
      state.burgerActive = false;
      state.menuActive = false;
    },
    showMenu(state) {
      state.burgerActive = true;
      state.menuActive = true;
    },
    setMenuInnerActive(state) {
      state.innerMenuActive = !state.innerMenuActive;
    },
    showInnerMenu(state) {
      state.innerMenuActive = true;
    },
    hideInnerMenu(state) {
      state.innerMenuActive = false;
    },
  },
});

export const menu = menuSlice.reducer;
export const { setMenuActive, hideMenu, showMenu, showInnerMenu, hideInnerMenu, setMenuInnerActive } =
  menuSlice.actions;
