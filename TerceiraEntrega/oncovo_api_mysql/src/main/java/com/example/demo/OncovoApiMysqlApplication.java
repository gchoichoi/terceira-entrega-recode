package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {"com.oncovo.model"})/*ESSA LINHA INDICA O CAMINHO QUE ELE PRECISA SEGUIR PRA CRIAR A TABELA*/
public class OncovoApiMysqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(OncovoApiMysqlApplication.class, args);
	}

}
