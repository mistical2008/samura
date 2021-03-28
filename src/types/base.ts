// Primitives:
export type TUserId = number | null;
export type TEmail = string | null;
export type TLogin = string | null;
export type TUrl = number | null;

// Objects:
export type TAppProps = {
  isInitialized: boolean,
  initializeApp: Function,
}

export type TDialog = {
  id: number,
  name: string,
  avatar: string,
}
export type TDialogsArray = Array<TDialog>;

export type TMessage = {
  id: number, my: boolean, text: string
}
export type TMessagesArray = Array<TMessage>;

export type TProfileContacts = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
}
export type TProfilePhotos = {
  small: string | null,
  large: string | null,
}
export type TUserProfile = {
  userId: TUserId,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: TProfileContacts,
  photos: TProfilePhotos,
};

export type TPost = {
  id: number,
  avatar: string,
  text: string,
  likes: number,
}

export type TPostArray = Array<TPost>;

export type TUser = {
  id: number,
  name: string,
  status?: string,
  photos: TProfilePhotos,
  followed: boolean,
}
export type TUsersArray = Array<TUser>;
