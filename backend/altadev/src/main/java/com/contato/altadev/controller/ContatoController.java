package com.contato.altadev.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contato.altadev.repository.ContatoRepository;
import com.contato.altadev.model.ContatoModel;

@RestController
@RequestMapping({"/contatos"})
public class ContatoController {
	
	private ContatoRepository repository;
	
	ContatoController(ContatoRepository contatoRepository){
		this.repository = contatoRepository;
	}
	
	@GetMapping
	public List<ContatoModel> findAll() {
		return repository.findAll();
	}
	
	@GetMapping(path = {"/{id}"})
	public ResponseEntity<ContatoModel> findById(@PathVariable long id){
		return repository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ContatoModel create(@RequestBody ContatoModel contato) {
		return repository.save(contato);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<ContatoModel> update(@PathVariable("id")long id,
			@RequestBody ContatoModel contato){
		
		return repository.findById(id)
		        .map(record -> {
		            record.setNome(contato.getNome());
		            record.setEmail(contato.getEmail());
		            record.setTelefone(contato.getTelefone());
		            ContatoModel updated = repository.save(record);
		            return ResponseEntity.ok().body(updated);
		        }).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping(path ={"/{id}"})
	public ResponseEntity<?> delete(@PathVariable("id") long id) {
	    return repository.findById(id)
	        .map(record -> {
	            repository.deleteById(id);
	            return ResponseEntity.ok().build();
	        }).orElse(ResponseEntity.notFound().build());
	}

}
