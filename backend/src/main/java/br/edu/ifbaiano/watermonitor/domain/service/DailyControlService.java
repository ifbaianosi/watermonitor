package br.edu.ifbaiano.watermonitor.domain.service;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.model.DailyControl;
import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.repository.DailyControlRepository;

@Service
public class DailyControlService {

	@Autowired
	private DailyControlRepository dailyControlRepository;

	@Autowired
	private TankService tankService;

	@Transactional
	public DailyControl save(DailyControl dailyControl, Long tankId) {
		Tank tank = tankService.findOrFail(tankId);
		
		dailyControl.setTank(tank);
		dailyControl.setCreatedAt(OffsetDateTime.now());
		
		List<DailyControl> dailyControls = dailyControlRepository.findAllByTankId(tankId);
		
		List<DailyControl> isTheSameDate = dailyControls.stream().filter(
				date -> date.getCreatedAt().toLocalDate().equals(dailyControl.getCreatedAt().toLocalDate()))
				.collect(Collectors.toList());
		
		if(isTheSameDate.size()>0) {
			DailyControl updatedDailyControl = isTheSameDate.get(0);
			updatedDailyControl.setCreatedAt(dailyControl.getCreatedAt());
			updatedDailyControl.setRegisterStatus(dailyControl.getRegisterStatus());
			updatedDailyControl.setWaterLevel(dailyControl.getWaterLevel());
			
			
			DailyControl dailyControlSaved = dailyControlRepository.save(updatedDailyControl);
			
			tank.updateLastDailyControl(dailyControlSaved);
			
			return dailyControlSaved;
		}else {
			DailyControl dailyControlSaved = dailyControlRepository.save(dailyControl);
			
			tank.updateLastDailyControl(dailyControlSaved);
			
			return dailyControlSaved;
			
		}		
		
	}

	public DailyControl findOrFail(Long tankLevelId) {
		return dailyControlRepository.findById(tankLevelId)
				.orElseThrow();
	}
}
