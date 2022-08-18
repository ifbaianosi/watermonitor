package br.edu.ifbaiano.watermonitor.domain.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Tank {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Column(nullable = false)
	private String name;

	private String description;
	
	@Embedded
	private LastDailyControl lastDailyControl;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LastDailyControl getLastDailyControl() {
		return lastDailyControl;
	}

	public void setLastDailyControl(LastDailyControl lastDailyControl) {
		this.lastDailyControl = lastDailyControl;
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
		Tank other = (Tank) obj;
		return Objects.equals(id, other.id);
	}

	public void updateLastDailyControl(DailyControl dailyControl) {
		if(getLastDailyControl()== null) {
			this.setLastDailyControl(new LastDailyControl());

		}
		
		getLastDailyControl().setDate(dailyControl.getCreatedAt());
		getLastDailyControl().setLevel(dailyControl.getWaterLevel());
		getLastDailyControl().setRegisterStatus(dailyControl.getRegisterStatus());			
	}

}
