package com.nando.Cadastro.exception;

public class ProdutoNaoEncontrado extends RuntimeException{
    public ProdutoNaoEncontrado (Long id){
        super("Produto com ID " + id + " não encontrado");
    }
}
