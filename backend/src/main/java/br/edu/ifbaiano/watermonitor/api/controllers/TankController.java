package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.repository.TankRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tanks")
public class TankController {

	@Autowired
	private TankRepository tankRepository;
	
	@GetMapping
	public List<Tank> list () {
		
		 List<Tank> tank = tankRepository.findAll();
		 		
		 return tank;	
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Tank create(@RequestBody Tank tank) {
		return tankRepository.save(tank);
	}
		
}
