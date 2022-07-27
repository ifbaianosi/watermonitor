package br.edu.ifbaiano.watermonitor.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;

@Repository
public interface TankRepository extends JpaRepository<Tank, Long>, TankRepositoryQueries{

	@Query("select distinct(t) from Tank t left join fetch t.tankDailyControl")
	List<Tank> findAllWithLastDailyControl();
	
}
