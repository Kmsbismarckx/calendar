import { AppDispatch } from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";
import { setEvents, setGuests } from "./index";
import { IEvent } from "../../../models/IEvent";

export const EventActionCreators = {
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvent = json.filter(
        (e) => e.author === username || e.guest === username
      );
      dispatch(setEvents(currentUserEvent));
    } catch (e) {
      console.log(e);
    }
  },
};
