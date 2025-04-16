// import { createSlice } from '@reduxjs/toolkit';

// // Part1: Define Slice (including reducers and actions)
// const initialState = { heartItems: [] };
// const heartSlice = createSlice({
//   name: 'heart',
//   initialState,
//   reducers: {
//     addHeartItems: (state, action) => {
//         const item = action.payload;
//       const work = state.heartItems.find((x) => x.id === item.id);
//       if (!!work) {
//         const heartItems = state.heartItems.map((x) =>
//            x.id === work.id ? item : x
//         );
//         state.heartItems = heartItems;
//      } else {
//        state.heartItems = [...state.heartItems, item];
//      }
//     },
//   },
// });

// // export state to global
// export const selectHeartItems = (state) => state.heart.heartItems;

// // export actions to global
// export const { addHeartItems } = heartSlice.actions;

// // export reducer to global
// export default heartSlice.reducer;