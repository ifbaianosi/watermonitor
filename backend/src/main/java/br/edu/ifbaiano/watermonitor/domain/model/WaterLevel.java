package br.edu.ifbaiano.watermonitor.domain.model;

public enum WaterLevel {
	
	EMPTY("Vazio"),
	LOW("Abaixo do meio"),
	MIDDLE("Pelo meio"),
	ALMOST_FULL("Acima do meio"),
	FULL("Cheio");
	
	private String description;
	
	WaterLevel(String description){
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
	
	

}
