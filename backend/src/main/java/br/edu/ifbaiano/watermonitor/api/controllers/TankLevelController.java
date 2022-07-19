package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.TankLevel;
import br.edu.ifbaiano.watermonitor.domain.repository.TankLevelRepository;
import br.edu.ifbaiano.watermonitor.domain.service.TankLevelService;

@RestController
@RequestMapping("/tank/{tankId}/tanklevel")
public class TankLevelController {

	@Autowired
	private TankLevelService tankLevelService;

	@Autowired
	private TankLevelRepository tankLevelRepository;

	@GetMapping
	public List<TankLevel> show(@PathVariable Long tankId){
		return tankLevelRepository.findAll();
	}

	@PostMapping()
	public TankLevel create (@PathVariable Long tankId, @RequestBody TankLevel tankLevel) {
		return tankLevelService.save(tankLevel, tankId);
	}

	@PutMapping("/{tankLevelId}")
	public TankLevel update(@PathVariable Long tankLevelId, @RequestBody TankLevel tankLevel) {

		TankLevel tankLevelDataBase = tankLevelService.findOrFail(tankLevelId);

		tankLevelDataBase.setWaterLevel(tankLevel.getWaterLevel());

		System.out.println("--------------------------------->"+tankLevel.getCreatedAt());

		return tankLevelService.save(tankLevelDataBase, tankLevelId);
	}


}
