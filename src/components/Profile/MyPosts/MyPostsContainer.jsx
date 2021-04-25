import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import { getProfilePostsState } from "../../../redux/profile-selectors";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: getProfilePostsState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (NewPostText) => {
      dispatch(addPost(NewPostText));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);
