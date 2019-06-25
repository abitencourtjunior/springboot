package com.contato.altadev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contato.altadev.model.ContatoModel;

@Repository
public interface ContatoRepository extends JpaRepository<ContatoModel, Long> {

}
