package facul.domain;

public class Aluno {
	int ag;
	String nome;
	
	public Aluno(int ag,String nome) {
		this.ag = ag;
		this.nome = nome;
	}
	
	public int getAg() {
		return ag;
	}
	public void setAg(int ag) {
		this.ag = ag;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
}
