import { setAuth, setUser, setIsLoading, setError } from "./auth";
import { AuthActionCreators } from "./auth/action-creators";
import { setEvents, setGuests } from "./event";
import { EventActionCreators } from "./event/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  setAuth,
  setUser,
  setIsLoading,
  setError,
  ...EventActionCreators,
  setEvents,
  setGuests,
};
