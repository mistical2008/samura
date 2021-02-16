import React from "react";
import { render, screen } from "@testing-library/react";
import store from "./../../../redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Dialogs from './Dialogs'

// props: addMessage<function>, isAuth<bool>, dialogsPage<object>
// dialogsPage<object>: dialogs<array>, messages<array>
// dialog<object>: name<string>, id<number>, avatar<string>
// message<object>: my<bool>, id<number>, text<string>

const mockData = {
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
};
// Dialogs: length, name, avatar
const {dialogs: [{name,avatar}], messages: [id,my,text]} = mockData;

const withStoreAndRouter = ({children}) => {
  return (
    <Router>
      <Provider store={store}>
        {children}
      </Provider>
    </Router>
  );
};

// Dialogs: length, name, avatar
describe("Dialogs list", () => {
  test("Renders Dialogs", () => {
    const { debug } = render(<Dialogs dialogsPage={mockData} />, {wrapper: withStoreAndRouter})
  })

  test(`Dialogs length should be ${dialogs.length}`, () => {
    const { container } = render(<Dialogs dialogsPage={mockData} />, {wrapper: withStoreAndRouter})
    expect(container.querySelectorAll(".dialog")).toHaveLength(dialogs.length)
  })

  test(`First dialog name should be ${name}`, () => {
    const { container } = render(<Dialogs dialogsPage={mockData} />, {wrapper: withStoreAndRouter})
    expect(container.querySelectorAll(".dialog")).toHaveLength(dialogs.length)
  })

  test(`First dialog avatar src should be ${avatar}`, () => {

  })
})

// Messages: length, messageText, id, my
describe("Messages", () => {
  test("Renders Messages", () => {

  })

  test(`Messages length should be ${messages.length}`, () => {

  })

  test(`First dialog text should be ${text}`, () => {

  })

  test(`First message id should be ${id}`, () => {

  })

  let isMine = my ? "shold be ": "sholdn't be" ;
  test(`First message ${isMine} mine`, () => {

  })
})