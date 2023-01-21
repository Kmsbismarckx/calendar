import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../index";
import { EventState, SetEventsPayload, SetGuestsPayload } from "./types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

const initialState: EventState = {
  events: [],
  guests: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setGuests(state, { payload }: PayloadAction<SetGuestsPayload>) {
      state.guests = payload;
    },
    setEvents(state, { payload }: PayloadAction<SetEventsPayload>) {
      state.events = payload;
    },
  },
});

export default eventSlice.reducer;

export const { setGuests, setEvents } = eventSlice.actions;

export const selectEvent = (state: RootState) => state.event;
