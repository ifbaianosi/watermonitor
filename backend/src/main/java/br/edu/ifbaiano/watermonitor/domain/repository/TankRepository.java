package br.edu.ifbaiano.watermonitor.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;

@Repository
public interface TankRepository extends JpaRepository<Tank, Long>{
	
}
