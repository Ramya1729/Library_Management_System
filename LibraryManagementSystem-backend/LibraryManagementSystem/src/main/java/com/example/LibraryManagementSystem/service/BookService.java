package com.example.LibraryManagementSystem.service;

import java.util.List;
import java.util.Optional;

import com.example.LibraryManagementSystem.entity.Book;

public interface BookService {
    List<Book> getAllBooks();

    Book saveBook(Book book);

    Optional<Book> getBookById(Long id);

    Book updateBook(Long id, Book updatedBook);

    Book updateBookTitle(Long id, String title);

    void deleteBook(Long id);
}
