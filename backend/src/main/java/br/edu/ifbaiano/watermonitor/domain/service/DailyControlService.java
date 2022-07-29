package br.edu.ifbaiano.watermonitor.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.model.DailyControl;
import br.edu.ifbaiano.watermonitor.domain.repository.DailyControlRepository;

@Service
public class DailyControlService {

	@Autowired
	private DailyControlRepository tankLevelRepository;

	@Autowired
	private TankService tankService;

	@Transactional
	public DailyControl save(DailyControl dailyControl, Long tankId) {
		Tank tank = tankService.findOrFail(tankId);		

		dailyControl.setTank(tank);
		
		DailyControl dailyControlSaved = tankLevelRepository.save(dailyControl);
		
		tank.updateLastDailyControl(dailyControlSaved);
		
		return dailyControlSaved;
		
	}

	public DailyControl findOrFail(Long tankLevelId) {
		return tankLevelRepository.findById(tankLevelId)
				.orElseThrow();
	}
}
