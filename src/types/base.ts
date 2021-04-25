import { InjectedFormProps } from "redux-form";

// Primitives:
export type TUserId = number | null;
export type TEmail = string | null;
export type TLogin = string | null;
export type TUrl = number | null;

// Objects:
export type AppProps = {
  isInitialized: boolean,
  initializeApp: Function,
}

export type DialogShape = {
  id: number,
  name: string,
  avatar: string,
}
export type DialogsArray = Array<DialogShape>;

export type MessageShape = {
  id: number, my: boolean, text: string
}
export type MessagesArray = Array<MessageShape>;

export type ProfileContactsShape = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
}
export type PhotosShape = {
  small: string | null,
  large: string | null,
}
export type ProfileShape = {
  userId: TUserId,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: ProfileContactsShape,
  photos: PhotosShape,
};

export type PostShape = {
  id: number,
  avatar: string,
  text: string,
  likes: number,
}

export type PostArray = Array<PostShape>;

export type UserShape = {
  id: number,
  name: string,
  status?: string,
  photos: PhotosShape,
  followed: boolean,
}
export type UsersArray = Array<UserShape>;

export type FormProps<FD = {}, P = {}> = InjectedFormProps<FD, P> & P;
