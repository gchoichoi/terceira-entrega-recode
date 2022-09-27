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
@Table(name = "PASSAGEM")
public class Passagem implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_passagem;
	@Column
	private long id_pessoa;
	@Column
	private long id_destino;
	@Column
	private Date dt_ida;
	@Column
	private Date dt_volta;
	@Column
	private long valor_passagem;
	
	public Passagem() {
		super();
	}

	
	public Passagem(long id_passagem, long id_pessoa, long id_destino, Date dt_ida, Date dt_volta,
			long valor_passagem) {
		super();
		this.id_passagem = id_passagem;
		this.id_pessoa = id_pessoa;
		this.id_destino = id_destino;
		this.dt_ida = dt_ida;
		this.dt_volta = dt_volta;
		this.valor_passagem = valor_passagem;
	}

	public long getId_passagem() {
		return id_passagem;
	}

	public void setId_passagem(long id_passagem) {
		this.id_passagem = id_passagem;
	}

	public long getId_pessoa() {
		return id_pessoa;
	}

	public void setId_pessoa(long id_pessoa) {
		this.id_pessoa = id_pessoa;
	}

	public long getId_destino() {
		return id_destino;
	}

	public void setId_destino(long id_destino) {
		this.id_destino = id_destino;
	}

	public Date getDt_ida() {
		return dt_ida;
	}

	public void setDt_ida(Date dt_ida) {
		this.dt_ida = dt_ida;
	}

	public Date getDt_volta() {
		return dt_volta;
	}

	public void setDt_volta(Date dt_volta) {
		this.dt_volta = dt_volta;
	}

	public long getValor_passagem() {
		return valor_passagem;
	}

	public void setValor_passagem(long valor_passagem) {
		this.valor_passagem = valor_passagem;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id_passagem);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Passagem other = (Passagem) obj;
		return id_passagem == other.id_passagem;
	}


	@Override
	public String toString() {
		return "Passagem [id_passagem=" + id_passagem + ", id_pessoa=" + id_pessoa + ", id_destino=" + id_destino
				+ ", dt_ida=" + dt_ida + ", dt_volta=" + dt_volta + ", valor_passagem=" + valor_passagem + "]";
	}

	
	
	

}
