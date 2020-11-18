import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import store from '../../../redux/store';


const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
          posts={state.posts}
          newPostText={state.newPostText}
          addPost={addPost}
          onPostChange={updateNewPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
