package facul.rest;

import java.util.Collection;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import facul.AlunosBC;
import facul.domain.Aluno;

@Path("/alunos")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class AlunosRest {

	@GET
    @Path("/lista")
    public Collection<Aluno> getAlunos() {
      return AlunosBC.retornaAlunos();
    }
 
    @GET
    @Path("/aluno/{ag}")
    public Aluno getAluno(@PathParam("ag") int ag) {
    	
    	
    	return null;
    }
 
    @POST
    @Path("/aluno/{ag}")
    public String addAluno(@PathParam("ag") int ag, @QueryParam("nome") String nome) {
    	
    	AlunosBC.retornaAlunos().add(new Aluno(ag,nome));
    	
    	return "Tudo ok";	
    }
 
    @PUT
    @Path("/aluno/{ag}")
    public Aluno updateAluno(@PathParam("ag") int ag, String nome) {

    	
    	return null;
    }
 
    @DELETE
    @Path("/aluno/{ag}")
    public Aluno removeAluno(@PathParam("ag") int ag) {

    	return null;
    }
	
	
	
}
