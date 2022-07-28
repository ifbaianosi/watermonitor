package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.TankDailyControl;
import br.edu.ifbaiano.watermonitor.domain.repository.TankDailyControlRepository;
import br.edu.ifbaiano.watermonitor.domain.service.TankDailyControlService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tanks/{tankId}/tanklevel")
public class TankLevelController {

	@Autowired
	private TankDailyControlService tankLevelService;

	@Autowired
	private TankDailyControlRepository tankLevelRepository;

	@GetMapping
	public List<TankDailyControl> show(@PathVariable Long tankId){
		return tankLevelRepository.findAll();
	}

	@PostMapping()
	public TankDailyControl create (@PathVariable Long tankId, @RequestBody TankDailyControl tankLevel) {
		return tankLevelService.save(tankLevel, tankId);
	}

	@PutMapping("/{tankLevelId}")
	public TankDailyControl update(@PathVariable Long tankLevelId, @RequestBody TankDailyControl tankLevel) {

		TankDailyControl tankDailyControlDataBase = tankLevelService.findOrFail(tankLevelId);

		tankDailyControlDataBase.setWaterLevel(tankLevel.getWaterLevel());

		return tankLevelService.save(tankDailyControlDataBase, tankLevelId);
	}


}
