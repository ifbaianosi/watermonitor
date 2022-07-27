package br.edu.ifbaiano.watermonitor.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.TankDailyControl;
import br.edu.ifbaiano.watermonitor.domain.service.TankDailyControlService;

@RestController
@RequestMapping("/tanks/{tankId}/daily-controls")
public class TankDailyControlController {

	@Autowired
	private TankDailyControlService tankDailyControlService;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public TankDailyControl create(@PathVariable Long tankId, @RequestBody TankDailyControl tankDailyControl) {
		return tankDailyControlService.save(tankDailyControl, tankId);
	
	}
	
}
