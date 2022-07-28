package br.edu.ifbaiano.watermonitor.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class EntityInUseException extends DomainException{

	private static final long serialVersionUID = 1L;

	public EntityInUseException(String mensagem) {
		super(mensagem);
	}

}
