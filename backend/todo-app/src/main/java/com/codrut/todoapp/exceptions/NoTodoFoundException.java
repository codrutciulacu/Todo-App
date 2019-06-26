package com.codrut.todoapp.exceptions;

public class NoTodoFoundException extends RuntimeException {

    public NoTodoFoundException(final String message) {
        super(message);
    }
}
