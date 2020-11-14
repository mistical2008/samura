const store = {
  _renderApp() {
    console.log("State has been changed");
  },

  _state: {
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
          text: "Hi there!!!!!",
          likes: 112,
        },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Dimych",
          avatar:
            "http://purepng.com/public/uploads/large/purepng.com-man-face-herofaceshumansfrontalhuman-identityman-1421526885661w7dlt.png",
        },
        {
          id: 2,
          name: "Sveta",
          avatar: "http://pngimg.com/uploads/face/face_PNG5667.png",
        },
        {
          id: 3,
          name: "Sasha",
          avatar:
            "http://www.freepngimg.com/download/drake/20552-2-drake-face-transparent.png",
        },
        {
          id: 4,
          name: "Valera",
          avatar: "http://pluspng.com/img-png/face-hd-png-kanye-450.png",
        },
        {
          id: 5,
          name: "Anya",
          avatar:
            "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Animals-PNG/Cat_Face_PNG_Clip_Art_Image.png?m=1537487302",
        },
        {
          id: 6,
          name: "Zhenya",
          avatar: "https://www.freeiconspng.com/uploads/obama-face-png-3.png",
        },
      ],
      messages: [
        { id: 1, my: false, text: "Hi there!" },
        { id: 2, my: true, text: "Hello" },
        { id: 1, my: false, text: "How are you?" },
      ],
      newMessageText: "New Text!",
    },

    sidebar: {
      items: [
        { name: "Profile", href: "profile" },
        { name: "Messages", href: "dialogs" },
        { name: "News", href: "news" },
        { name: "Music", href: "music" },
        { name: "Settings", href: "settings" },
      ],
      widgets: [
        {
          "my-friends": [
            {
              id: 4,
              name: "Valera",
              avatar: "http://pluspng.com/img-png/face-hd-png-kanye-450.png",
            },
            {
              id: 5,
              name: "Anya",
              avatar:
                "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Animals-PNG/Cat_Face_PNG_Clip_Art_Image.png?m=1537487302",
            },
            {
              id: 6,
              name: "Zhenya",
              avatar:
                "https://www.freeiconspng.com/uploads/obama-face-png-3.png",
            },
          ],
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  addPost() {
    this._state.profilePage.posts.push({
      id: 5,
      avatar:
        "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
      text: this._state.profilePage.newPostText,
      likes: 0,
    });
    this.updateNewPostText("");
    this._renderApp(this._state);
  },

  updateNewPostText(NewText) {
    this._state.profilePage.newPostText = NewText;
    this._renderApp(this._state);
  },

  addMessage() {
    debugger;
    const newMessageText = this._state.dialogsPage.newMessageText;
    this._state.dialogsPage.messages.push({
      id: 1,
      my: true,
      text: newMessageText,
    });
    this.updateNewMessageText("");
    this._renderApp(this._state);
  },

  updateNewMessageText(NewText) {
    this._state.dialogsPage.newMessageText = NewText;
    this._renderApp(this._state);
  },

  subscribe(observer) {
    this._renderApp = observer;
  },
};

export default store;
