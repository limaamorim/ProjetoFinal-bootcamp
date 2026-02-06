package com.nando.Cadastro.dto;

import java.time.LocalDateTime;

public class ProdutoResponseDTO {

    private Long id;
    private String nome;
    private Double preco;
    private Integer quantidade;
    private Boolean ativo;
    private LocalDateTime dataCriacao;
    private LocalDateTime dataAtualizacao;

    public ProdutoResponseDTO() {}

    public ProdutoResponseDTO(
            Long id,
            String nome,
            Double preco,
            Integer quantidade,
            Boolean ativo,
            LocalDateTime dataCriacao,
            LocalDateTime dataAtualizacao
    ) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.ativo = ativo;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public Double getPreco() {
        return preco;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Boolean getAtivo() {
        return ativo;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public LocalDateTime getDataAtualizacao() {
        return dataAtualizacao;
    }
}
