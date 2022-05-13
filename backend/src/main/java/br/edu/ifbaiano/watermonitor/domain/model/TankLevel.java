package br.edu.ifbaiano.watermonitor.domain.model;

import java.time.OffsetDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class TankLevel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@CreationTimestamp
	@Column(nullable = false, columnDefinition = "datetime")
	private OffsetDateTime createdAt;

	@NotBlank
	private WaterLevel waterLevel;
	
	private Long tankId;
	
	
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
	public Long getTankId() {
		return tankId;
	}
	public void setTankId(Long tankId) {
		this.tankId = tankId;
	}
	public WaterLevel getWaterLevel() {
		return waterLevel;
	}
	public void setWaterLevel(WaterLevel waterLevel) {
		this.waterLevel = waterLevel;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TankLevel other = (TankLevel) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
}
