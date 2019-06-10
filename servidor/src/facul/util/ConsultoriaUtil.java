package facul.util;

import java.util.List;

import facul.domain.Consultoria;
import facul.domain.Endereco;

/**
 * Classe responsavel por possuir os metodos de gerar as consultorias mocks
 * @author anderson
 *
 */
public class ConsultoriaUtil {
	
	public static Consultoria getConsultoriaFerragens() {
		Consultoria consultoria = new Consultoria();
		consultoria.setId(1);
		consultoria.setCnpj("37.939.007/0001-83");
		consultoria.setNomeFantasia("Gato Ajato Consultoria Ltda");
		consultoria.setRazaoSocial("Marcela e Antonella Ferragens ME");
		consultoria.setEmail("diretoria@marcelaeantonellaferragensme.com.br");
		consultoria.setNomeContato("Marcela");
		consultoria.setTelefone("(41) 2531-4950");
		consultoria.setAreaFoco("Ferragens");
		
		Endereco endereco = new Endereco();
		endereco.setId(1);
		endereco.setCep("83221-332");
		endereco.setNomeRua("Acesso Diva Nunes dos Santos");
		endereco.setMunicipio("Paranaguá");
		endereco.setEstado("PR");
		endereco.setPais("Brasil");

		consultoria.setEndereco(endereco);
		
		return consultoria;
	}
	
	public static Consultoria getConsultoriaSeguranca() {
		Consultoria consultoria = new Consultoria();
		consultoria.setId(2);
		consultoria.setCnpj("58.412.090/0001-08");
		consultoria.setNomeFantasia("Sabrina e Roberto Financeira ME");
		consultoria.setRazaoSocial("Sabrina e Roberto Financeira ME");
		consultoria.setEmail("seguranca@sabrinaerobertofinanceirame.com.br");
		consultoria.setNomeContato("Sabrina");
		consultoria.setTelefone("(43) 3658-2837");
		consultoria.setAreaFoco("Segurança");
		
		Endereco endereco = new Endereco();
		endereco.setId(2);
		endereco.setCep("86073-480");
		endereco.setNomeRua("Rua Sidrak Silva Filho");
		endereco.setMunicipio("Londrina");
		endereco.setEstado("PR");
		endereco.setPais("Brasil");

		consultoria.setEndereco(endereco);
		
		return consultoria;
	}
	
	public static Consultoria getConsultoriaDoces() {
		Consultoria consultoria = new Consultoria();
		consultoria.setId(3);
		consultoria.setCnpj("29.475.037/0001-58");
		consultoria.setNomeFantasia("Martin e Isabella Pães e Doces ME");
		consultoria.setRazaoSocial("Martin e Isabella Pães e Doces ME");
		consultoria.setEmail("contato@martineisabellapaesedocesme.com.br");
		consultoria.setNomeContato("Martin");
		consultoria.setTelefone("(41) 2638-4314");
		consultoria.setAreaFoco("Doces");
		
		Endereco endereco = new Endereco();
		endereco.setId(3);
		endereco.setCep("80240-001");
		endereco.setNomeRua("Avenida Sete de Setembro");
		endereco.setMunicipio("Curitiba");
		endereco.setEstado("PR");
		endereco.setPais("Brasil");

		consultoria.setEndereco(endereco);
		
		return consultoria;
	}


}
