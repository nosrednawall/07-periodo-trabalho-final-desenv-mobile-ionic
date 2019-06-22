package facul.domain;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Consultoria implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int id;
	private String cnpj;
	private String nomeFantasia;
	private String razaoSocial;
	private String email;
	private String nomeContato;
	private String telefone;
	private Endereco endereco;
	private String areaFoco;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getNomeFantasia() {
		return nomeFantasia;
	}
	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}
	public String getRazaoSocial() {
		return razaoSocial;
	}
	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNomeContato() {
		return nomeContato;
	}
	public void setNomeContato(String nomeContato) {
		this.nomeContato = nomeContato;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	public String getAreaFoco() {
		return areaFoco;
	}
	public void setAreaFoco(String areaFoco) {
		this.areaFoco = areaFoco;
	}
	
	public void adicionaConsultoria(Consultoria consultoria) {
		this.id = consultoria.getId();
		this.cnpj = consultoria.getCnpj();
		this.nomeFantasia = consultoria.getNomeFantasia();
		this.razaoSocial = consultoria.getRazaoSocial();
		this.email = consultoria.getEmail();
		this.nomeContato = consultoria.getNomeContato();
		this.telefone = consultoria.getTelefone();
		this.endereco = consultoria.getEndereco();
		this.areaFoco = consultoria.getAreaFoco();
	}
	
	
	
}
