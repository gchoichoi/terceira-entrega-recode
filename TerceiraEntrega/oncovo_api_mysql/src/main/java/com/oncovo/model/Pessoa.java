package com.oncovo.model;

import java.io.Serializable;

import java.sql.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PESSOA")
public class Pessoa implements Serializable {
	

	private static final long serialVersionUID = 1L;


		//VARIAVEIS
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		@Column
		private String nome;
		@Column
		private String telefone;
		@Column
		private String email;
		@Column
		private String endereco;
		@Column
		private Date dt_nascimento;
		@Column
		private long cpf;
		@Column
		private String senha;
		
		public Pessoa() {
			super();
		}
		
		public Pessoa(long id, String nome, String telefone, String email, String endereco, Date dt_nascimento,
				long cpf, String senha) {
			super();
			this.id = id;
			this.nome = nome;
			this.telefone = telefone;
			this.email = email;
			this.endereco = endereco;
			this.dt_nascimento = dt_nascimento;
			this.cpf = cpf;
			this.senha = senha;
		}
		
		//getters e setters
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		
		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		
		public String getTelefone() {
			return telefone;
		}
		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}
		
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		public String getEndereco() {
			return endereco;
		}
		public void setEndereco(String endereco) {
			this.endereco = endereco;
		}
		
		public Date getDt_nascimento() {
			return dt_nascimento;
		}
		public void setDt_nascimento(Date dt_nascimento) {
			this.dt_nascimento = dt_nascimento;
		}
		
		public long getCpf() {
			return cpf;
		}
		public void setCpf(long cpf) {
			this.cpf = cpf;
		}
		
		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}

		//hashCode e equals -- para fazer uma verificação de que o id é realmente único
		@Override
		public int hashCode() {
			return Objects.hash(id);
		}
		
		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Pessoa other = (Pessoa) obj;
			return id == other.id;
		} 
		
		//
		@Override
		public String toString() {
			return "Pessoa [id=" + id + ", nome=" + nome + ", telefone=" + telefone + ", email=" + email + ", endereco="
					+ endereco + ", dt_nascimento=" + dt_nascimento + ", cpf=" + cpf + ", senha=" + senha + "]";
		}
		
		


}