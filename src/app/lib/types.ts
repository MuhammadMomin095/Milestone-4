// lib/types.ts

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: number;
    createdAt: Date;
    updatedAt?: Date;
  }
  
  export interface User {
    id: string;
    email: string;
    password?: string;
    name?: string;
    profilePicture?: string;
  }

