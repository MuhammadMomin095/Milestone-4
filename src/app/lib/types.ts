export interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  export interface User {
      id:number;
      email:string;
      password?:string;
  }