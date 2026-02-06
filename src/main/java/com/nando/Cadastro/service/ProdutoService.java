package com.nando.Cadastro.service;

import com.nando.Cadastro.dto.ProdutoRequestDTO;
import com.nando.Cadastro.dto.ProdutoResponseDTO;

import java.util.List;

public interface ProdutoService {

    ProdutoResponseDTO salvar(ProdutoRequestDTO dto);

    List<ProdutoResponseDTO> listarTodos();

    ProdutoResponseDTO buscarPorId(Long id);

    ProdutoResponseDTO atualizar(Long id, ProdutoRequestDTO dto);

    void deletar(Long id);
}
