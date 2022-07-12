package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.repository.TankRepository;
import br.edu.ifbaiano.watermonitor.domain.service.TankLevelService;

@RestController
@RequestMapping("/tank")
public class TankController {
	
	@Autowired
	private TankRepository tankRepository;
	
	@Autowired
	private TankLevelService tankLevelService;

	@GetMapping
	public List<Tank> show () {
		return tankRepository.findAll();	 
	}
	
}
