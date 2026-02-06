package com.nando.Cadastro.exception;

import java.time.LocalDateTime;

public class ErrorResponse {

    private int status;
    private String error;
    private Object message;
    private LocalDateTime timestamp;

    public ErrorResponse(int status, String error, Object message) {
        this.status = status;
        this.error = error;
        this.message = message;
        this.timestamp = LocalDateTime.now();
    }

    public int getStatus() { return status; }
    public String getError() { return error; }
    public Object getMessage() { return message; }
    public LocalDateTime getTimestamp() { return timestamp; }
}
