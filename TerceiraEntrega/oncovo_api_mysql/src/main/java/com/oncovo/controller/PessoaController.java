package com.oncovo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oncovo.model.Pessoa;
import com.oncovo.service.PessoaService;

@RestController
@RequestMapping(value = "/pessoa" )
@CrossOrigin("*")
public class PessoaController {
	
	@Autowired
	private PessoaService service;
	
	/*FIND BY ID*/
	@GetMapping(value = "{id}")
	public ResponseEntity<Pessoa> findById(@PathVariable Long id){
		Pessoa pessoa = service.findById(id);
		return ResponseEntity.ok().body(pessoa);
	}
	
	/*FIND ALL*/
	@GetMapping
	public ResponseEntity<List<Pessoa>> findAll(){
		List<Pessoa> pessoas = service.findAll();
		return ResponseEntity.ok().body(pessoas);
	}
	
	/*SAVE*/
	@PostMapping
	public ResponseEntity<Pessoa> save(@RequestBody Pessoa pessoa){
		Pessoa objeto = service.save(pessoa);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*UPDATE*/
	@PutMapping
	public ResponseEntity<Pessoa> update(@RequestBody Pessoa pessoa){
		Pessoa objeto = service.update(pessoa);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*DELETE*/
	@DeleteMapping(value = "/(id)")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.deletePessoa(id);
		return ResponseEntity.noContent().build();
	}
}