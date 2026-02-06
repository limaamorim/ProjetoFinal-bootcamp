package com.nando.Cadastro.service;

import com.nando.Cadastro.exception.ProdutoNaoEncontrado;
import com.nando.Cadastro.mapper.ProdutoMapper;
import org.springframework.stereotype.Service;

import com.nando.Cadastro.dto.ProdutoRequestDTO;
import com.nando.Cadastro.dto.ProdutoResponseDTO;
import com.nando.Cadastro.model.Produto;
import com.nando.Cadastro.repository.ProdutoRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    private final ProdutoRepository repository;

    public ProdutoServiceImpl(ProdutoRepository repository) {
        this.repository = repository;
    }

    @Override
    public ProdutoResponseDTO salvar(ProdutoRequestDTO dto) {
        Produto produto = ProdutoMapper.toEntity(dto);
        Produto salvo = repository.save(produto);
        return ProdutoMapper.toResponseDTO(salvo);
    }

    @Override
    public List<ProdutoResponseDTO> listarTodos() {
        return repository.findAll()
                .stream()
                .map(ProdutoMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProdutoResponseDTO buscarPorId(Long id) {
        Produto produto = repository.findById(id)
                .orElseThrow(() -> new ProdutoNaoEncontrado(id));
        return ProdutoMapper.toResponseDTO(produto);
    }

    @Override
    public ProdutoResponseDTO atualizar(Long id, ProdutoRequestDTO dto) {
        Produto produto = repository.findById(id)
                .orElseThrow(() -> new ProdutoNaoEncontrado(id));

        ProdutoMapper.updateEntity(produto, dto);

        Produto atualizado = repository.save(produto);
        return ProdutoMapper.toResponseDTO(atualizado);
    }

    @Override
    public void deletar(Long id) {
        Produto produto = repository.findById(id)
                .orElseThrow(() -> new ProdutoNaoEncontrado(id));
        repository.delete(produto);
    }
}
