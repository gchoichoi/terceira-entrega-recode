package com.oncovo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oncovo.model.Passagem;
import com.oncovo.repositories.PassagemRepository;
import com.oncovo.service.exception.ObjectNotFoundException;

/*FAZ A REQUISIÇÃO DO CRUD*/

@Service
public class PassagemService {

	@Autowired
	private PassagemRepository passagemRepo;
	
	/* FIND BY ID - encontrar a passagem pelo id*/
	public Passagem findById(Long id_passagem) {
		Optional<Passagem> passagem = passagemRepo.findById(id_passagem);
		return passagem.orElseThrow(() -> new ObjectNotFoundException("Objeto com id: " 
		+ id_passagem + " não foi encontrado. Tipo" + Passagem.class.getName()));
	}
	
	/*FIND ALL*/
	public List<Passagem> findAll(){
		return passagemRepo.findAll();
	}
	
	/*SAVE*/
	public Passagem save(Passagem pessoa) {
		return passagemRepo.save(pessoa);
	}
	
	/*UPDATE*/
	public Passagem update(Passagem passagem) {
		findById(passagem.getId_passagem());
		return passagemRepo.save(passagem);
	}
	
	/*DELETE*/
	public void deletePassagem(Long id_passagem) {
		passagemRepo.deleteById(id_passagem);
	}
	
}