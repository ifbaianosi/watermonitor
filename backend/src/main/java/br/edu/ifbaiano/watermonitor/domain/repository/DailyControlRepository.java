package br.edu.ifbaiano.watermonitor.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifbaiano.watermonitor.domain.model.DailyControl;


@Repository
public interface DailyControlRepository extends JpaRepository<DailyControl, Long>{
	
	List<DailyControl> findAllByTankId(Long tankId);

}
