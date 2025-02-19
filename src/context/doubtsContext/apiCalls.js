import axios from "axios";
import {
  createNewDoubtFailure,
  createNewDoubtStart,
  createNewDoubtSuccess,
  deleteDoubtFailure,
  deleteDoubtStart,
  deleteDoubtSuccess,
  getAllDoubtsFailure,
  getAllDoubtsStart,
  getAllDoubtsSuccess,
  getRecentDoubtsFailure,
  getRecentDoubtsStart,
  getRecentDoubtsSuccess,
  updateDoubtFailure,
  updateDoubtStart,
  updateDoubtSuccess,
} from "./DoubtsActions";

export const getAllDoubts = async (user, dispatch) => {
  dispatch(getAllDoubtsStart());

  try {
    const res = await axios.get("https://nextgel-backend.herokuapp.com/api/doubt/all", {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.data);
    dispatch(getAllDoubtsSuccess(res.data));
  } catch (err) {
    dispatch(getAllDoubtsFailure(err));
  }
};

export const getRecentDoubts = async (user, dispatch) => {
  dispatch(getRecentDoubtsStart());

  try {
    const res = await axios.get("https://nextgel-backend.herokuapp.com/api/doubt/recent", {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.data);
    dispatch(getRecentDoubtsSuccess(res.data));
  } catch (err) {
    dispatch(getRecentDoubtsFailure(err));
  }
};

export const createNewDoubt = async (doubt, user, dispatch) => {
  dispatch(createNewDoubtStart());

  try {
    const res = await axios.post("https://nextgel-backend.herokuapp.com/api/doubt", doubt, {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.data);
    dispatch(createNewDoubtSuccess(res.data));
  } catch (err) {
    dispatch(createNewDoubtFailure(err));
  }
};

export const updateDoubt = async (doubt, user, dispatch) => {
  dispatch(updateDoubtStart());

  try {
    const res = await axios.put(`https://nextgel-backend.herokuapp.com/api/doubt/${doubt._id}`, doubt, {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.status);
    dispatch(updateDoubtSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(updateDoubtFailure(err));
  }
};

export const deleteDoubt = async (doubtId, user, dispatch) => {
  dispatch(deleteDoubtStart());

  try {
    const res = await axios.delete(`https://nextgel-backend.herokuapp.com/api/doubt/${doubtId}`, {
      headers: {
        'Authorization': "Bearer " + user.access,
      },
    });

    // console.log(res.status);
    if (res.status === 200) dispatch(deleteDoubtSuccess(doubtId));
  } catch (err) {
    dispatch(deleteDoubtFailure(err));
  }
};
