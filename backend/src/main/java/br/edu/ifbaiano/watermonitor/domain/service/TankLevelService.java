package br.edu.ifbaiano.watermonitor.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.model.TankLevel;
import br.edu.ifbaiano.watermonitor.domain.repository.TankLevelRepository;
import br.edu.ifbaiano.watermonitor.domain.repository.TankRepository;

@Service
public class TankLevelService {
	
	@Autowired
	private TankLevelRepository tankLevelRepository;
	
	@Autowired
	private TankRepository tankRepository;
	
	@Transactional
	public TankLevel save(TankLevel tankLevel, Long tankId) {
		Tank tank = tankRepository.findById(tankId).orElseThrow(); 
		
		tankLevel.setTank(tank);
		
		return tankLevelRepository.save(tankLevel);
		
	}
	
	public TankLevel findOrFail(Long tankLevelId) {
		return tankLevelRepository.findById(tankLevelId)
				.orElseThrow();
	}

}
