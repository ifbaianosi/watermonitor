package br.edu.ifbaiano.watermonitor.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.model.Hydrometer;
import br.edu.ifbaiano.watermonitor.domain.repository.HydrometerRepository;

@Service
public class HydrometerService {

	@Autowired
	private HydrometerRepository hydrometerRepository;
	
	public Hydrometer findOrFail(Long hydrometerId) {
		return hydrometerRepository.findById(hydrometerId).orElseThrow();
	}
	
	public Hydrometer save(Hydrometer hydrometer) {
		return hydrometerRepository.save(hydrometer);
	}
}
