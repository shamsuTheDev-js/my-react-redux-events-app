import {
  Form, //redirect, useActionData,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmationActions, eventsListActions } from "../../store/store";
import formStyles from "../Styles/Form.module.css";

const AddEventPage = () => {
  // Gives info on th upcoming Events
  //const upcomingEvents = useSelector(state => state.upcomingEvents.upcomingEvents);
  //const data = useActionData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle form submission; this replaces the action property in the Form.
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
    dispatch(eventsListActions.addNewEvent(submission));
    dispatch(confirmationActions.confirmation());

    // Redirect to the events page
    navigate("..");
  };
  return (
    <Form
      className={`${formStyles.container} ${formStyles.form}`}
      method="post"
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
        placeholder="Please label your event"
        className={formStyles.inputs}
      />

      <label htmlFor="image" className={formStyles.label}>
        Image link
      </label>
      <input
        type="url"
        id="image"
        name="image"
        placeholder="Please input your image link"
      />

      <label htmlFor="description" className={formStyles.label}>
        Description
      </label>
      <textarea
        id="description"
        name="description"
        placeholder="Please describe your event"
        className={formStyles.description}
      ></textarea>

      <label htmlFor="date" className={formStyles.label}>
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        placeholder="Please set the date of your event"
      />

      <button className={formStyles.button}>Submit</button>
      {/* {data && data.error && <p>{data.error}</p>} */}
    </Form>
  );
};
export default AddEventPage;

// export const formAction = async ({ request }) => {
//   // Request contains all of the form data
//   const data = await request.formData();
//   console.log(request);

//   // Abstract the form data object...
//   const submission = {
//     title: data.get("title"),
//     image: data.get("image"),
//     description: data.get("description"),
//     date: data.get("date"),
//   };
//   console.log(submission);
//   console.log(data.get("date"));

//   // Validate the form data
//   if (submission.description.length < 1 || submission.title.length < 1) {
//     return { error: "All fields must be filled" };
//   }

//   // Redirect the user
//   return redirect("../events");
// };
