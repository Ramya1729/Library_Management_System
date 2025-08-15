package com.example.LibraryManagementSystem.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.LibraryManagementSystem.entity.Book;
import com.example.LibraryManagementSystem.service.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
public Book saveBook(@RequestBody Book book) {
    System.out.println("Saving Book - Title: " + book.getTitle() + ", Author: " + book.getAuthor());
    return bookService.saveBook(book);
}


   @PutMapping("/{id}")
public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) {
    Book updatedBook = bookService.updateBook(id, book);
    if (updatedBook == null) {
        return ResponseEntity.notFound().build();  // Return 404 if book not found
    }
    return ResponseEntity.ok(updatedBook);  // Return 200 OK with updated book
}
    @PatchMapping("/{id}/title")
public ResponseEntity<Book> updateBookTitle(@PathVariable Long id, @RequestBody Map<String, String> updates) {
    String title = updates.get("title");
    Book updatedBook = bookService.updateBookTitle(id, title);
    if (updatedBook == null) {
        return ResponseEntity.notFound().build();  // Return 404 if book not found
    }
    return ResponseEntity.ok(updatedBook);  // Return 200 OK with updated book
}

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        Optional<Book> bookOptional = bookService.getBookById(id);

        if (bookOptional.isPresent()) {
            bookService.deleteBook(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
