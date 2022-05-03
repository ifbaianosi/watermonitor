package br.edu.ifbaiano.watermonitor.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hydrometers")
public class HydrometerController {

	@GetMapping
	public String show(){
		return "Hello fucking world";
	}
}
