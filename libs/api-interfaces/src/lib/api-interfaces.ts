export interface Message {
  message: string;
}

export interface Post {
  id?: number;
  date: Date;
  title: string;
  body: string;
  category: string;
}

export interface Comment {
  id?: number;
  postId?: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id : number;
}

export interface Address {
  street : string;
}

export interface Company {
  name : string;
}