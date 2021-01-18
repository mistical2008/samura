import profileReducer, { addPost } from "./profile-reducer";

const state = {
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

test("should return +1 posts length", () => {
  //action
  for (let i = 0; i < 3; i++) {
    const lenBefore = state.posts.length;
    const action = addPost("Hello from test!");
    const newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(lenBefore + 1);
  }
});

test("should be the same as setted in action", () => {
  const messages = ["Hello and Good Bye!", "Yo", "Yaikes samuray!"];
  for (let message of messages) {
    const action = addPost(message);
    const newState = profileReducer(state, action);
    const lastPost = newState.posts.slice(-1)[0];

    expect(lastPost.text).toBe(message);
  }
});
