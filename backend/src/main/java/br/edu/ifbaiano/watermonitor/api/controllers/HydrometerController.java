package br.edu.ifbaiano.watermonitor.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.Hydrometer;
import br.edu.ifbaiano.watermonitor.domain.service.HydrometerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/hydrometers")
public class HydrometerController {
	
	@Autowired
	private HydrometerService hydrometerSevice;
	

	@GetMapping("/{hydrometerId}")
	public Hydrometer show(@PathVariable Long hydrometerId){
		return hydrometerSevice.findOrFail(hydrometerId);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Hydrometer create(@RequestBody Hydrometer hydrometer) {
		return hydrometerSevice.save(hydrometer);
	}
	
}
