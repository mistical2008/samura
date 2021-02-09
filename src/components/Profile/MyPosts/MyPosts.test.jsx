import { render } from "@testing-library/react";
import React from "react";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// props: posts<array>, addPost<function>
// Post: text<string>, avatar:<string>, likes:<number>
// TODO: create hoc for connecting to the store and provider

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
      ]
    }

    describe("MyPosts", () => {
        test("Renders MyPosts component", () => {
            const {posts} = mockData;
            render(<MyPosts posts={posts} addPost={alert} />)
            screen.debug();

        })
    })
