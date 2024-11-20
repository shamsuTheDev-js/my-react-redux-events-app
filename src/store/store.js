import { configureStore, createSlice } from "@reduxjs/toolkit";
//import eventsCounterReducer from "./events/eventsSlice";

const initialState = {
  eventsList: [],
  editThisEvent: {},
  hasEventBeenAdded: false,
};

const eventsListSlice = createSlice({
  name: "eventsList",
  initialState: initialState,
  reducers: {
    addNewEvent(state, action) {
      //state.eventsList.unshift(action.payload);
      state.eventsList =
        state.eventsList.length === 0
          ? [action.payload]
          : [...state.eventsList, action.payload];
    },
    editEvent(state, action) {
      state.editThisEvent = action.payload;
    },
    deleteEvent(state, action) {
      if (state.eventsList.length === 0) {
        state.eventsList = [];
      } else {
        state.eventsList = state.eventsList.filter(
          (event) => event.key !== action.payload
        );
      }
    },
  },
});

const confirmationSlice = createSlice({
  name: "hasEventBeenAdded",
  initialState: initialState,
  reducers: {
    confirmation(state) {
      state.hasEventBeenAdded = !state.hasEventBeenAdded;
    },
  },
});

export const store = configureStore({
  reducer: {
    eventsList: eventsListSlice.reducer,
    hasEventBeenAdded: confirmationSlice.reducer,
  },
});

export const eventsListActions = eventsListSlice.actions;
export const confirmationActions = confirmationSlice.actions;
// export const storeState = store.getState();
// export const appDispatch = store.dispatch;
