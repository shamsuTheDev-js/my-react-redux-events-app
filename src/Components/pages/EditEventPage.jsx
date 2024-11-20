import { useSelector, useDispatch } from "react-redux";
import {
  Form, //redirect, useActionData,
  useNavigate,
} from "react-router-dom";
import formStyles from "../Styles/Form.module.css";
import { eventsListActions } from "../../store/store";

const EditEventPage = () => {
  const editThisEvent = useSelector((state) => state.eventsList.editThisEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(editThisEvent);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const submission = {
      key: `${formData.get(["title"].toString())}-${formData.get(
        ["description"].toString()
      )}-${formData.get(["date"].toString())}`,
      title: formData.get("title"),
      image: formData.get("image"),
      description: formData.get("description"),
      date: formData.get("date"),
      dateAsNumber: {
        date: new Date(formData.get("date")).getDate(),
        month: new Date(formData.get("date")).getMonth(),
        year: new Date(formData.get("date")).getFullYear(),
      },
    };
    // let check = submission.key;
    // console.log(submission.key === check);

    if (submission.description.length < 1 || submission.title.length < 1) {
      return { error: "All fields must be filled" };
    }

    // Dispatch action to add a new event
    dispatch(eventsListActions.deleteEvent(editThisEvent.key));
    dispatch(eventsListActions.addNewEvent(submission));
    // dispatch(confirmationActions.confirmation());

    // Redirect to the events page
    navigate("..");
  };

  return (
    <Form
      className={`${formStyles.container} ${formStyles.form}`}
      method="get"
      onSubmit={handleSubmit} //action=".."
    >
      {/* htmlFor value has to be the same with the id used in the input */}
      <label htmlFor="title" className={formStyles.label}>
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder={editThisEvent.title}
        className={formStyles.inputs}
      />

      <label htmlFor="image" className={formStyles.label}>
        Image link
      </label>
      <input
        type="url"
        id="image"
        name="image"
        placeholder={editThisEvent.image}
      />

      <label htmlFor="description" className={formStyles.label}>
        Description
      </label>
      <textarea
        id="description"
        name="description"
        placeholder={editThisEvent.description}
        className={formStyles.description}
      ></textarea>

      <label htmlFor="date" className={formStyles.label}>
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        placeholder={editThisEvent.date}
      />
      <span className={formStyles.buttons}>
        <button className={formStyles.button} onClick={() => navigate("..")}>
          cancel
        </button>
        <button className={formStyles.button}>Save</button>
      </span>
      {/* {data && data.error && <p>{data.error}</p>} */}
    </Form>
  );
};
export default EditEventPage;
