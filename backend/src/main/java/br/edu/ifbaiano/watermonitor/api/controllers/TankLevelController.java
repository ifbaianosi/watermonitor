package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.DailyControl;
import br.edu.ifbaiano.watermonitor.domain.repository.DailyControlRepository;
import br.edu.ifbaiano.watermonitor.domain.service.DailyControlService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tanks/{tankId}/tanklevel")
public class TankLevelController {

	@Autowired
	private DailyControlService tankLevelService;

	@Autowired
	private DailyControlRepository tankLevelRepository;

	@GetMapping
	public List<DailyControl> show(@PathVariable Long tankId){
		return tankLevelRepository.findAll();
	}

	@PostMapping()
	public DailyControl create (@Valid @PathVariable Long tankId, @RequestBody DailyControl tankLevel) {
		return tankLevelService.save(tankLevel, tankId);
	}

	@PutMapping("/{tankLevelId}")
	public DailyControl update(@Valid @PathVariable Long tankLevelId, @RequestBody DailyControl tankLevel) {

		DailyControl dailyControlDataBase = tankLevelService.findOrFail(tankLevelId);

		dailyControlDataBase.setWaterLevel(tankLevel.getWaterLevel());

		return tankLevelService.save(dailyControlDataBase, tankLevelId);
	}


}
