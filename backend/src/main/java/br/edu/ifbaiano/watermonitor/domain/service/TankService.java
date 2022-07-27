package br.edu.ifbaiano.watermonitor.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.repository.TankRepository;

@Service
public class TankService {
	
	@Autowired
	private TankRepository tankRepository;
	
	public Tank findOrFail(Long TankId) {
		return tankRepository.findById(TankId).orElseThrow();
	}

}
