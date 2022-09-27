package com.oncovo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oncovo.model.Destino;
import com.oncovo.repositories.DestinoRepository;
import com.oncovo.service.exception.ObjectNotFoundException;

/*FAZ A REQUISIÇÃO DO CRUD*/

@Service
public class DestinoService {

	@Autowired
	private DestinoRepository destinoRepo;
	
	/* FIND BY ID - encontrar a pessoa pelo id*/
	public Destino findById(Long id_destino) {
		Optional<Destino> destino = destinoRepo.findById(id_destino);
		return destino.orElseThrow(() -> new ObjectNotFoundException("Objeto com id: " 
		+ id_destino + " não foi encontrado. Tipo" + Destino.class.getName()));
	}
	
	/*FIND ALL*/
	public List<Destino> findAll(){
		return destinoRepo.findAll();
	}
	
	/*SAVE*/
	public Destino save(Destino destino) {
		return destinoRepo.save(destino);
	}
	
	/*UPDATE*/
	public Destino update(Destino destino) {
		findById(destino.getId_destino());
		return destinoRepo.save(destino);
	}
	
	/*DELETE*/
	public void deleteDestino(Long id_destino) {
		destinoRepo.deleteById(id_destino);
	}
	
}