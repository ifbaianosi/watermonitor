package br.edu.ifbaiano.watermonitor.domain.model;

import java.time.OffsetDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.CreationTimestamp;


@Entity
@Table
public class Reading {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@CreationTimestamp
	@Column(nullable = false, columnDefinition = "datetime")
	private OffsetDateTime createdAt;

	@NotBlank
	@Column(nullable = false)
	private Integer consume;
	
	@NotBlank
	@Column(nullable = false)
	private Integer reading;

	@ManyToOne
	@JoinColumn(nullable = false)
	private Hydrometer hydrometer;

	public boolean readingValueGreaterThan(Integer lastReading) {
		if(getReading()>lastReading) {
			return true;
		}else {
			return false;
		}
	}

	public Integer calculateConsume(Integer reading, Integer display) {
		return reading-display;
	}

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

	public Integer getConsume() {
		return consume;
	}

	public void setConsume(Integer consume) {
		this.consume = consume;
	}

	public Integer getReading() {
		return reading;
	}

	public void setReading(Integer reading) {
		this.reading = reading;
	}

	public Hydrometer getHydrometer() {
		return hydrometer;
	}

	public void setHydrometer(Hydrometer hydrometer) {
		this.hydrometer = hydrometer;
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
		Reading other = (Reading) obj;
		return Objects.equals(id, other.id);
	}
}
