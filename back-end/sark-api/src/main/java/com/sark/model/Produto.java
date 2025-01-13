package com.sark.model;

import jakarta.persistence.*;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String descricao;
    private String categoria;
    private Double preco;
    private Integer estoque;
    private String imagens;

    // Getters e Setters
}
