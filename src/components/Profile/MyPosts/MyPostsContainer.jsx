import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (NewPostText) => {
      dispatch(addPost(NewPostText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);
