package com.oncovo.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DESTINO")
public class Destino implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_destino;
	@Column
	private String cidade_destino;
	@Column
	private String estado_pais_destino;
	
	public Destino() {
		super();
	}

	public Destino(long id_destino, String cidade_destino, String estado_pais_destino) {
		super();
		this.id_destino = id_destino;
		this.cidade_destino = cidade_destino;
		this.estado_pais_destino = estado_pais_destino;
	}

	public long getId_destino() {
		return id_destino;
	}

	public void setId_destino(long id_destino) {
		this.id_destino = id_destino;
	}

	public String getCidade_destino() {
		return cidade_destino;
	}

	public void setCidade_destino(String cidade_destino) {
		this.cidade_destino = cidade_destino;
	}

	public String getEstado_pais_destino() {
		return estado_pais_destino;
	}

	public void setEstado_pais_destino(String estado_pais_destino) {
		this.estado_pais_destino = estado_pais_destino;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id_destino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return id_destino == other.id_destino;
	}

	@Override
	public String toString() {
		return "Destino [id_destino=" + id_destino + ", cidade_destino=" + cidade_destino + ", estado_pais_destino="
				+ estado_pais_destino + "]";
	}

	
	
	
}