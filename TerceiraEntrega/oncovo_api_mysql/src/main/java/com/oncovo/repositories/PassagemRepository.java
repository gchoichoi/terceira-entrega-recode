package com.oncovo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.oncovo.model.Passagem;

/*O REPOSTORIO É EQUIVALENTE AO DAO*/

@Repository
public interface PassagemRepository extends JpaRepository<Passagem, Long>{

}
