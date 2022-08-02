package br.edu.ifbaiano.watermonitor.api.exceptionhandler;

public enum ProblemType {

	ENTITY_NOT_FOUND("Entity not founded."),
	ENTITY_IN_USE("Entity in use."),
	DOMAIN_ERROR("Violation domain rules."),
	DADOS_INVALIDOS("Dados inválidos");
	
	private String title;
	
	public String getTitle() {
		return title;
	}

	ProblemType(String title) {
		this.title = title;
	}
	
}
