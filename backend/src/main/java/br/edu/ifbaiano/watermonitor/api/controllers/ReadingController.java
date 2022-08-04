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

import br.edu.ifbaiano.watermonitor.domain.model.Reading;
import br.edu.ifbaiano.watermonitor.domain.service.ReadingService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/hydrometers/{hydrometerId}/readings")
public class ReadingController {

	@Autowired
	private ReadingService readingService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Reading create(@Valid @RequestBody Reading reading, @PathVariable Long hydrometerId) {
		return readingService.save(reading, hydrometerId);
	}
}