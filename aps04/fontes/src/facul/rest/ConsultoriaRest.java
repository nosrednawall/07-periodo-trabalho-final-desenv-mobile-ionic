package facul.rest;


import java.util.Collection;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.OptimisticLockException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;

import facul.ConsultoriaDaoMock;
import facul.domain.Consultoria;

/**
 * Classe responsavel pelas interacoes via rest com as consultorias
 * @author anderson
 *
 */
@Stateless
@Path("/consultoria")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class ConsultoriaRest {

	@Inject
	private ConsultoriaDaoMock dao;
	
	/**
	 * Lista as consultorias
	 * @return
	 */
	@GET
	@Path("/lista")
	public Collection<Consultoria> getConsultorias() {
		return dao.retornaConsultorias();
	}

	/**
	 * Busca uma consultoria
	 * @param id
	 * @return
	 */
	@GET
	@Path("/{id}")
	public Response getConsultoria(@PathParam("id") int id) {
		return dao.varreColecaoEmBuscaDoId(id)
				? Response.ok(dao.buscaConsultoria(id)).build()
				: Response.status(Status.NOT_FOUND).build();
	}

	/**
	 * Salva uma consultoria
	 * @param consultoria
	 * @return
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response addConsultoria(Consultoria consultoria) {

		boolean okSalvo = dao.adicionaConsultoria(consultoria);
		if (okSalvo) {
			return Response.created(
					UriBuilder.fromResource(ConsultoriaRest.class).path(String.valueOf(consultoria.getId())).build())
					.build();
		} else {
			return Response.serverError().build();
		}

	}

	/**
	 * Atualiza uma consultoria
	 * @param id
	 * @param consultoria
	 * @return
	 */
	@PUT
	@Path("/{id}")
	public Response update(@PathParam("id") int id, Consultoria consultoria) {
		if (consultoria == null) {
			return Response.status(Status.BAD_REQUEST).build();
		}
		if (id == 0) {
			return Response.status(Status.BAD_REQUEST).build();
		}
		if (id != consultoria.getId()) {
			return Response.status(Status.CONFLICT).entity(consultoria).build();
		}
		if (dao.buscaConsultoria(id) == null) {
			return Response.status(Status.NOT_FOUND).build();
		}
		try {
			dao.atualizaConsultoria(id, consultoria);
		} catch (OptimisticLockException e) {
			return Response.status(Response.Status.CONFLICT).entity(e.getEntity()).build();
		}

		return Response.noContent().build();
	}

	/**
	 * Remove uma consultoria pelo numero do id
	 * @param id
	 * @return
	 */
	@DELETE
	@Path("/{id}")
	public Response deleteById(@PathParam("id") int id) {
		if (dao.varreColecaoEmBuscaDoId(id)) {
			return Response.status(Status.NOT_FOUND).build();
		} else {
			dao.removeConsultoria(id);
			return Response.noContent().build();
		}
	}
}
