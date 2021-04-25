import React from "react";
import { render, screen } from "@testing-library/react";
import { actions } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import store from "./../../../redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// props: posts<array>, addPost<function>
// Post: text<string>, avatar:<string>, likes:<number>
// TODO: create hoc for connecting to the store and provider

const withStoreAndRouter = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  );
};

const mockData = {
  posts: [
    {
      id: 1,
      avatar:
        "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
      text: "Hello! How are you?",
      likes: 110,
    },
    {
      id: 2,
      avatar:
        "https://www.photocase.com/photos/104760-child-joy-face-eyes-boy-child-happy-laughter-masculine-photocase-stock-photo-large.jpeg",
      text: "Hi there!!!!!",
      likes: 112,
    },
  ],
};
const { posts } = mockData;
const {
  posts: [{ likes: firstPostLikes }],
} = mockData;

describe("MyPosts", () => {
  const [{ text: message }] = posts;
  test("Renders MyPosts component", () => {
    const { debug } = render(
      <MyPosts posts={posts} addPost={actions.addPost} />,
      {
        wrapper: withStoreAndRouter,
      }
    );
    debug();
  });

  test(`Post with text: '${message}' should be in document`, () => {
    render(<MyPosts posts={posts} addPost={actions.addPost} />, {
      wrapper: withStoreAndRouter,
    });
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test(`First post likes should be equal to '${firstPostLikes} likes'`, () => {
    const myPosts = render(
      <MyPosts posts={posts} addPost={actions.addPost} />,
      {
        wrapper: withStoreAndRouter,
      }
    );
    expect(myPosts.container.querySelector(".likes")).toHaveTextContent(
      `${firstPostLikes} likes`
    );
  });

  test(`Posts length should be equal to ${posts.length} `, () => {
    const myPosts = render(
      <MyPosts posts={posts} addPost={actions.addPost} />,
      {
        wrapper: withStoreAndRouter,
      }
    );
    expect(myPosts.container.querySelectorAll(".post")).toHaveLength(
      posts.length
    );
  });
});
