import axios from "axios";
import {
  getSubjectsFailure,
  getSubjectsStart,
  getSubjectsSuccess,
} from "./SubjectsActions";

export const getSubjects = async (user, dispatch) => {
  dispatch(getSubjectsStart());

  try {
    const res = await axios.get("https://nextgel-backend.herokuapp.com/api/subject/all?course=BCA", {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.data);
    dispatch(getSubjectsSuccess(res.data));
  } catch (err) {
    dispatch(getSubjectsFailure(err));
  }
};
