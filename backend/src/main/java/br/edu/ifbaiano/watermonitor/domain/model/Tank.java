package br.edu.ifbaiano.watermonitor.domain.model;

import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Tank {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	private String description;
	
	@OneToMany(mappedBy = "tank")
	private List<TankDailyControl> tankDailyControl;

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

	public List<TankDailyControl> getTankDailyControl() {
		return tankDailyControl;
	}

	public void setTankDailyControl(List<TankDailyControl> tankDailyControl) {
		this.tankDailyControl = tankDailyControl;
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


}
