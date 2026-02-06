package com.nando.Cadastro.mapper;

import com.nando.Cadastro.dto.ProdutoRequestDTO;
import com.nando.Cadastro.dto.ProdutoResponseDTO;
import com.nando.Cadastro.model.Produto;
import org.springframework.web.bind.annotation.GetMapping;

public class ProdutoMapper {

    // Create
    public static Produto toEntity(ProdutoRequestDTO dto) {
        Produto produto = new Produto();
        produto.setNome(dto.getNome());
        produto.setPreco(dto.getPreco());
        produto.setQuantidade(dto.getQuantidade());
        produto.setAtivo(true);
        return produto;
    }

    // Update
    public static void updateEntity(Produto produto, ProdutoRequestDTO dto) {
        produto.setNome(dto.getNome());
        produto.setPreco(dto.getPreco());
        produto.setQuantidade(dto.getQuantidade());
    }

    // Response
    public static ProdutoResponseDTO toResponseDTO(Produto produto) {
        return new ProdutoResponseDTO(
                produto.getId(),
                produto.getNome(),
                produto.getPreco(),
                produto.getQuantidade(),
                produto.getAtivo(),
                produto.getDataAtualizacao(),
                produto.getDataCriacao()
        );
    }
}
