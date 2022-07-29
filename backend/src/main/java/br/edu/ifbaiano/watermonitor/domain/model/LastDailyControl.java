package br.edu.ifbaiano.watermonitor.domain.model;

import java.time.OffsetDateTime;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Embeddable
public class LastDailyControl {

	private OffsetDateTime date;
	
	@Enumerated(EnumType.STRING)
	private WaterLevel waterLevel;
	
	@Column(nullable = true)
	private boolean registerStatus;
	
	public OffsetDateTime getDate() {
		return date;
	}
	public void setDate(OffsetDateTime date) {
		this.date = date;
	}
	public WaterLevel getWaterLevel() {
		return waterLevel;
	}
	public void setLevel(WaterLevel waterLevel) {
		this.waterLevel = waterLevel;
	}
	public boolean getRegisterStatus() {
		return registerStatus;
	}
	public void setRegisterStatus(boolean registerStatus) {
		this.registerStatus = registerStatus;
	}

}
