package br.edu.ifbaiano.watermonitor.domain.repository;

import java.util.List;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;

public interface TankRepositoryQueries{

	List<Tank> findFirst();
	
}
