// temp data
export interface BookType {
  id: string;
  name: string;
  genre: string;
}

export interface AuthorType {
  id: string;
  name: string;
  age: number;
}

export const books: BookType[] = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

export const authors: AuthorType[] = [
  { name: "Patrick Rothfuss", age: 44, id: "1" },
  { name: "Brandon Sanderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" },
];
