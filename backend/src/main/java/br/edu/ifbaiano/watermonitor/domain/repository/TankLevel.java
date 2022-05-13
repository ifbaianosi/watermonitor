package br.edu.ifbaiano.watermonitor.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TankLevel extends JpaRepository<TankLevel, Long>{

}
