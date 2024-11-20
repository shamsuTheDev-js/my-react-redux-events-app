import { useMemo } from "react";
import List from "./Styles/List.module.css";
import { isUpcoming } from "../store/events/UpcomingEventChecker.js";
import { useSelector } from "react-redux";
//import { useState, useEffect, useMemo, useRef } from "react";

const UpcomingEvents = () => {
  const eventsList = useSelector((state) => state.eventsList.eventsList);
  const upcomingEvents = eventsList.filter((event) => isUpcoming(event));
  const upcomingEventsMarkup =
    upcomingEvents &&
    upcomingEvents.map((event, index) => (
      <li key={index} className={List.item}>
        <h2 className={List.title}>{event.title}</h2>
        {/* <img src={event.image} alt={event.title} /> */}
        <p className={List.description}>{event.description}</p>
        <p className={List.date}>Date: {event.date}</p>
      </li>
    ));
  return (
    <div className={List.container}>
      {!eventsList && (
        <h1 className={List.item}>You Have No Upcoming Events</h1>
      )}
      {eventsList && <ul className={List.list}>{upcomingEventsMarkup}</ul>}
    </div>
  );
};

export default UpcomingEvents;
