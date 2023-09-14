import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loginStatus: false,
  },
  reducers: {
    setUser(state, action) {
      state.userData = action.payload
      state.loginStatus = true
    },
    logout(state, action) {
      state.userData = {}
      state.loginStatus = false;
    },
  }
})
export const { setUser, logout } = UserSlice.actions;

export default UserSlice.reducer;