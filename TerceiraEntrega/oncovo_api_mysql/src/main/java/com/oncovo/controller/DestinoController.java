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

import com.oncovo.model.Destino;
import com.oncovo.service.DestinoService;

@RestController
@RequestMapping(value = "/destino" )
@CrossOrigin("*")
public class DestinoController {
	
	@Autowired
	private DestinoService service;
	
	/*FIND BY ID*/
	@GetMapping(value = "{id}")
	public ResponseEntity<Destino> findById(@PathVariable Long id_destino){
		Destino destino = service.findById(id_destino);
		return ResponseEntity.ok().body(destino);
	}
	
	/*FIND ALL*/
	@GetMapping
	public ResponseEntity<List<Destino>> findAll(){
		List<Destino> destinos = service.findAll();
		return ResponseEntity.ok().body(destinos);
	}
	
	/*SAVE*/
	@PostMapping
	public ResponseEntity<Destino> save(@RequestBody Destino destino){
		Destino objeto = service.save(destino);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*UPDATE*/
	@PutMapping
	public ResponseEntity<Destino> update(@RequestBody Destino destino){
		Destino objeto = service.update(destino);
		return ResponseEntity.ok().body(objeto);
	}
	
	/*DELETE*/
	@DeleteMapping(value = "/(id)")
	public ResponseEntity<Void> delete(@PathVariable Long id_destino){
		service.deleteDestino(id_destino);
		return ResponseEntity.noContent().build();
	}
}