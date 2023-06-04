// types.ts

export interface Author {
    name: string;
    avatar: string;
    role: string;
  }
  
export interface ContentParagraph {
    type: 'paragraph';
    content: string;
  }
  
export interface ContentLink {
    type: 'link';
    content: string;
  }
  