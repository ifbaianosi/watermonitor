package br.edu.ifbaiano.watermonitor.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public abstract class EntityNotFoundedException extends DomainException{

	private static final long serialVersionUID = 1L;

	public EntityNotFoundedException(String mensagem) {
		super(mensagem);
	}
}
