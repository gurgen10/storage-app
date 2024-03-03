import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selector = (state: RootState) => state.user;

const userData = createSelector([selector], (state) => state.userData);
const loading = createSelector([selector], (state) => state.loading);

const userSelectors = {
    userData,
    loading
};

export default userSelectors;
