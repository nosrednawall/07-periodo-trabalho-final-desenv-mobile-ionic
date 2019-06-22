package facul;

import java.util.ArrayList;
import java.util.List;

import facul.domain.Aluno;


public class AlunosBC {

	static List<Aluno> alunos = new ArrayList<Aluno>();
	
	private AlunosBC() {}
	
	public static List<Aluno> retornaAlunos() {
		if (alunos != null)return alunos;
		else {
			alunos = new ArrayList<Aluno>();
			alunos.add(new Aluno(1,"Maria"));
			alunos.add(new Aluno(2,"João"));
			alunos.add(new Aluno(3,"José"));
			alunos.add(new Aluno(4,"Paula"));
			alunos.add(new Aluno(5,"Talita"));
			return alunos;
		}
	}
	
}
