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

import com.oncovo.model.Passagem;
import com.oncovo.service.PassagemService;

@RestController
@RequestMapping(value = "/passagem" )
@CrossOrigin("*")
public class PassagemController {
	
	@Autowired
	private PassagemService service;
	
	/*FIND BY ID*/
	@GetMapping(value = "{id_passagem}")
	public ResponseEntity<Passagem> findById(@PathVariable Long id_passagem){
		Passagem passagem = service.findById(id_passagem);
		return ResponseEntity.ok().body(passagem);
	}
	
	/*FIND ALL*/
	@GetMapping
	public ResponseEntity<List<Passagem>> findAll(){
		List<Passagem> passagens = service.findAll();
		return ResponseEntity.ok().body(passagens);
	}
	
	/*SAVE*/
	@PostMapping
	public ResponseEntity<Passagem> save(@RequestBody Passagem passagem){
		Passagem objeto = service.save(passagem);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*UPDATE*/
	@PutMapping
	public ResponseEntity<Passagem> update(@RequestBody Passagem passagem){
		Passagem objeto = service.update(passagem);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*DELETE*/
	@DeleteMapping(value = "/(id_passagem)")
	public ResponseEntity<Void> delete(@PathVariable Long id_passagem){
		service.deletePassagem(id_passagem);
		return ResponseEntity.noContent().build();
	}
}