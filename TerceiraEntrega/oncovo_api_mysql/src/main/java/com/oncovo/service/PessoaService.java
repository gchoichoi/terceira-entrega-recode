package com.oncovo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oncovo.model.Pessoa;
import com.oncovo.repositories.PessoaRepository;
import com.oncovo.service.exception.ObjectNotFoundException;

/*FAZ A REQUISIÇÃO DO CRUD*/

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository pessoaRepo;
	
	/* FIND BY ID - encontrar a pessoa pelo id*/
	public Pessoa findById(Long id) {
		Optional<Pessoa> pessoa = pessoaRepo.findById(id);
		return pessoa.orElseThrow(() -> new ObjectNotFoundException("Objeto com id: " 
		+ id + " não foi encontrado. Tipo" + Pessoa.class.getName()));
	}
	
	/*FIND ALL*/
	public List<Pessoa> findAll(){
		return pessoaRepo.findAll();
	}
	
	/*SAVE*/
	public Pessoa save(Pessoa pessoa) {
		return pessoaRepo.save(pessoa);
	}
	
	/*UPDATE*/
	public Pessoa update(Pessoa pessoa) {
		findById(pessoa.getId());
		return pessoaRepo.save(pessoa);
	}
	
	/*DELETE*/
	public void deletePessoa(Long id) {
		pessoaRepo.deleteById(id);
	}
	
}