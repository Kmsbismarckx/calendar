import React, { FC, useEffect } from "react";
import { Layout, Modal } from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectEvent } from "../store/reducers/event";
import { IEvent } from "../models/IEvent";
import { selectAuth } from "../store/reducers/auth";
import { useAppContext } from "../App";

const Event: FC = () => {
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(selectEvent);
  const { user } = useTypedSelector(selectAuth);
  const { modal, setModal } = useAppContext();
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModal(false);
    createEvent(event);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Layout className="h100">
      <EventCalendar events={events} />

      <Modal
        title="Добавить событие"
        open={modal}
        footer={null}
        onCancel={closeModal}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
