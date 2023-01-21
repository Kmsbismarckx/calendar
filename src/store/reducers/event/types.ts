import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export type SetGuestsPayload = IUser[];
export type SetEventsPayload = IEvent[];
