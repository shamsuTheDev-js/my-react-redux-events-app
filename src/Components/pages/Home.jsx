import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUpcoming } from "../../store/events/UpcomingEventChecker.js";

const Home = () => {
  const eventsListLength = useSelector((state) => state.eventsList.eventsList);
  const countUpcomingEvents = eventsListLength.filter((event) =>
    isUpcoming(event)
  ).length;

  return (
    <div>
      <h1>HomePage</h1>
      {eventsListLength && (
        <Link to="upcomingEvents">{countUpcomingEvents} UpcomingEvents</Link>
      )}
    </div>
  );
};

export default Home;
