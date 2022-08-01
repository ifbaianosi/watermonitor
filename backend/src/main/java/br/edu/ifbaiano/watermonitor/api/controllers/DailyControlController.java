package br.edu.ifbaiano.watermonitor.api.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.DailyControl;
import br.edu.ifbaiano.watermonitor.domain.service.DailyControlService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tanks/{tankId}/daily-controls")
public class DailyControlController {

	@Autowired
	private DailyControlService DailyControlService;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public DailyControl create(@Valid @PathVariable Long tankId, @RequestBody DailyControl dailyControl) {
		return DailyControlService.save(dailyControl, tankId);
	
	}
	
}
