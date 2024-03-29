package br.edu.ifbaiano.watermonitor.domain.model;

import java.time.OffsetDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class DailyControl {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, columnDefinition = "datetime")
	private OffsetDateTime createdAt;

	@Enumerated(EnumType.STRING)
	private WaterLevel waterLevel = WaterLevel.EMPTY;
	
	private boolean registerStatus = true;

	@JsonIgnore
	@ManyToOne
	private Tank tank;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public OffsetDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(OffsetDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public WaterLevel getWaterLevel() {
		return waterLevel;
	}
	public void setWaterLevel(WaterLevel waterLevel) {
		this.waterLevel = waterLevel;
	}
	public Tank getTank() {
		return tank;
	}
	public void setTank(Tank tank) {
		this.tank = tank;
	}

	public boolean getRegisterStatus() {
		return registerStatus;
	}
	public void setRegisterStatus(boolean registerStatus) {
		this.registerStatus = registerStatus;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if ((obj == null) || (getClass() != obj.getClass()))
			return false;
		DailyControl other = (DailyControl) obj;
		return Objects.equals(id, other.id);
	}
}
