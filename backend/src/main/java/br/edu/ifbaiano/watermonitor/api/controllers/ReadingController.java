package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.Optional;

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

import br.edu.ifbaiano.watermonitor.domain.model.Reading;
import br.edu.ifbaiano.watermonitor.domain.repository.ReadingRepository;
import br.edu.ifbaiano.watermonitor.domain.service.ReadingService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/hydrometers/{hydrometerId}/readings")
public class ReadingController {
	
	@Autowired
	private ReadingService readingService;
	
	@Autowired
	private ReadingRepository readingRepository;
	
	@GetMapping
	public Optional<Reading> buscar(@PathVariable Long hydrometerId) {
		return readingRepository.findById(hydrometerId);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Reading create(@RequestBody Reading reading, @PathVariable Long hydrometerId) {
		return readingService.save(reading, hydrometerId);
	}
}