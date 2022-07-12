package br.edu.ifbaiano.watermonitor.api.controllers;

import java.io.IOException;

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
import br.edu.ifbaiano.watermonitor.infrastructure.SuapClient;

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
	
	@GetMapping("/token")
	public void token() {
		SuapClient client = new SuapClient("CapHL5o9xFlKYu2T4Jqsr1RN90ikPUXCrGJXENo5", 
				"6dclF1jJdEo2moVrxajZdHdBvTr4c1F4HDLbNT4Z7iJ8qogdjCwlMgl1JePzEZ4nDGMUh6rR0j9owtLbpYkYWmOqR3b6CFr6QQxQEKdodhYeqxJY14iuPiH54K9GHV4k");
		
		try {
			client.authorize();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}
}
