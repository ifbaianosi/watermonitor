package br.edu.ifbaiano.watermonitor.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.model.TankDailyControl;
import br.edu.ifbaiano.watermonitor.domain.repository.TankDailyControlRepository;

@Service
public class TankDailyControlService {

	@Autowired
	private TankDailyControlRepository tankLevelRepository;

	@Autowired
	private TankService tankService;

	@Transactional
	public TankDailyControl save(TankDailyControl tankDailyControl, Long tankId) {
		Tank tank = tankService.findOrFail(tankId);

		tankDailyControl.setTank(tank);
		
		return tankLevelRepository.save(tankDailyControl);
	}

	public TankDailyControl findOrFail(Long tankLevelId) {
		return tankLevelRepository.findById(tankLevelId)
				.orElseThrow();
	}
}
