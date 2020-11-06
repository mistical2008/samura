const state = {
  profilePage: {
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
        text: "Hi there!",
        likes: 11111,
      },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Sveta" },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Valera" },
      { id: 5, name: "Anya" },
      { id: 6, name: "Zhenya" },
    ],
    messages: [
      { id: 1, my: false, text: "Hi there!" },
      { id: 1, my: true, text: "Hello" },
      { id: 1, my: false, text: "How are you?" },
    ],
  },
};

export default state;
