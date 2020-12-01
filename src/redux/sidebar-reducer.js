const initialState = {
  items: [
    { name: "Profile", href: "profile" },
    { name: "Messages", href: "dialogs" },
    { name: "News", href: "news" },
    { name: "Music", href: "music" },
    { name: "Settings", href: "settings" },
    { name: "Users", href: "users" },
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
          avatar: "https://www.freeiconspng.com/uploads/obama-face-png-3.png",
        },
      ],
    },
  ],
};

const sidebarReducer = (state = initialState) => {
  return { items: [...state.items], widgets: [...state.widgets] };
};

export default sidebarReducer;
