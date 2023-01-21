import React, { FC, useEffect, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectEvent } from "../store/reducers/event";
import { IEvent } from "../models/IEvent";
import { selectAuth } from "../store/reducers/auth";

const Event: FC = () => {
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(selectEvent);
  const { user } = useTypedSelector(selectAuth);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setIsModalOpen(false);
    createEvent(event);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={openModal}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={isModalOpen}
        footer={null}
        onCancel={closeModal}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
