export interface Book {
  id: number;
  title: string;
  author: string;
}

export type NewBook = Omit<Book, 'id'>;
