import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import List from "../Styles/List.module.css";
import { useNavigate } from "react-router-dom";
import { eventsListActions } from "../../store/store";
import { useState } from "react";

const EventsPage = () => {
  const [hoveredState, setHoveredState] = useState(false);
  const eventsList = useSelector((state) => state.eventsList.eventsList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToEditPage = (event) => {
    const eventData = event;
    dispatch(eventsListActions.editEvent(eventData));
    navigate("editEvent");
  };

  const eventIsHoveredOn = () => setHoveredState(true);
  const eventIsNotHoveredOn = () => setHoveredState(false);
  const deleteHandler = (event) => {
    // event.preventDefault();
    //console.log("delete");
    dispatch(eventsListActions.deleteEvent(event.key));
  };

  const eventsListMarkUp =
    eventsList &&
    eventsList.map((event, index) => (
      <li
        key={index}
        onMouseOver={() => eventIsHoveredOn()}
        onMouseOut={() => eventIsNotHoveredOn()}
        className={List.item}
        onClick={() => navigateToEditPage(event)}
      >
        <h2 className={List.title}>{event.title}</h2>
        {/* <img src={event.image} alt={event.title} /> */}
        <p className={List.desription}>{event.description}</p>
        <p className={List.date}>Date: {event.date}</p>
        {hoveredState && (
          <button
            className={List.deleteButton}
            onMouseDown={() => deleteHandler(event)}
          >
            ❌
          </button>
        )}
      </li>
    ));

  // const addEventHandler = () => {
  //   dispatch(eventsAddActions.addEvent("You have added a New Event"));
  //   dispatch(counterActions.increment());
  // };
  // const removeEventHandler = () => {
  //   dispatch(eventsAddActions.removeEvent());
  //   dispatch(counterActions.decrement());
  // };

  return (
    <>
      <span>
        <button>
          <NavLink to="upcomingEvents">upcoming 📋</NavLink>
        </button>
        <button>
          <NavLink to="addEvent" end>
            ➕
          </NavLink>
        </button>
      </span>

      <div className={List.container}>
        {!eventsList && <h1 className={List.item}>Events Page</h1>}
        <ul className={List.list}>{eventsListMarkUp}</ul>
      </div>
    </>
  );
};

export default EventsPage;
