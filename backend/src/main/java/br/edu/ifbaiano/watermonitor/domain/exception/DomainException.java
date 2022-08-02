package br.edu.ifbaiano.watermonitor.domain.exception;

public class DomainException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public DomainException(String mensagem) {
		super(mensagem);
	}

	public DomainException(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}

}