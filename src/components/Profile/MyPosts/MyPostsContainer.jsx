import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
// return (
// <StoreContext.Consumer>
// {(store) => {
// const state = store.getState().profilePage;
//
// const addPost = () => {
// store.dispatch(addPostActionCreator());
// };
//
// const updateNewPostText = (text) => {
// store.dispatch(updateNewPostTextActionCreator(text));
// };
//
// return (
// <MyPosts
// posts={state.posts}
// newPostText={state.newPostText}
// addPost={addPost}
// onPostChange={updateNewPostText}
// />
// );
// }}
// </StoreContext.Consumer>
// );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
