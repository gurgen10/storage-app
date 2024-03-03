import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
    id: string | number;
    name: string;
    image: string;
}
interface IUserState {
    userData: User;
    loading: boolean;
}

const initialState: IUserState = {
    userData: {
        id: '',
        name: '',
        image: 'no-user.jpg',
    },
    loading: false,

}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        state.userData = action.payload;
    },
  },
})

export default userSlice;
