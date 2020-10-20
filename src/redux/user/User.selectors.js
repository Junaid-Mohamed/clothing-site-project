import { createSelector } from "reselect";

const selectuser = (state) => state.user;

export const selectUser = createSelector([selectuser], (user) => user.User);
