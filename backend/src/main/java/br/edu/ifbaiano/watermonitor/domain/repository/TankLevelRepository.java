package br.edu.ifbaiano.watermonitor.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifbaiano.watermonitor.domain.model.TankLevel;


@Repository
public interface TankLevelRepository extends JpaRepository<TankLevel, Long>{

}
