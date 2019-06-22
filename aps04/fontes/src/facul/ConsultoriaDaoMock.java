package facul;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;

import facul.domain.Consultoria;
import facul.util.ConsultoriaUtil;
@Stateless
public class ConsultoriaDaoMock {
	
	static List<Consultoria> listaConsultorias;
	
	public ConsultoriaDaoMock() {
		geraDadosConsultoria();
	}
	
	public List<Consultoria> retornaConsultorias(){
		return listaConsultorias;
	}
	
	public boolean adicionaConsultoria(Consultoria consultoria) {
		consultoria.setId(getUltimoNumeroId()+1);
		listaConsultorias.add(consultoria);
		return listaConsultorias.contains(consultoria);	
	}
	
	public boolean removeConsultoria(int id) {
		geraDadosConsultoria();
		listaConsultorias.remove(getConsultoria(id));
		return !listaConsultorias.contains(getConsultoria(id));
	}
	
	public boolean atualizaConsultoria(int id, Consultoria consultoria) {
		listaConsultorias.set(id, consultoria);
		return consultoria.equals(getConsultoria(id));
	}
	
	public Consultoria buscaConsultoria(int id) {
		return getConsultoria(id);
	}
	
	private void geraDadosConsultoria() {
		if(listaConsultorias == null) {
			listaConsultorias = new ArrayList<Consultoria>();
			listaConsultorias.add(ConsultoriaUtil.getConsultoriaFerragens());
			listaConsultorias.add(ConsultoriaUtil.getConsultoriaSeguranca());
			listaConsultorias.add(ConsultoriaUtil.getConsultoriaDoces());
		}
	}
	
    public boolean varreColecaoEmBuscaDoId(int id) {
    	boolean achou = false;
    	for(Consultoria consultoria : listaConsultorias) {
    		if(consultoria.getId() == id) {
    			achou = true;
    		}
    	}
    	return achou;
    }
    
    private Consultoria getConsultoria(int id) {
    	Consultoria encontrada = new Consultoria();
    	for(Consultoria consultoria : listaConsultorias) {
    		if(consultoria.getId() == id) {
    			encontrada.adicionaConsultoria(consultoria);
    		}
    	}
    	
    	return encontrada;
    }
    
    private int getUltimoNumeroId() {
    	int id = 0;
    	
    	for(Consultoria consultoria : listaConsultorias) {
    		id = consultoria.getId();
    	}
    	
    	return id;
    }
}
