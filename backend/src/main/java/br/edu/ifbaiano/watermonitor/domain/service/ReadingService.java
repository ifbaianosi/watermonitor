package br.edu.ifbaiano.watermonitor.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifbaiano.watermonitor.domain.exception.DomainException;
import br.edu.ifbaiano.watermonitor.domain.model.Hydrometer;
import br.edu.ifbaiano.watermonitor.domain.model.Reading;
import br.edu.ifbaiano.watermonitor.domain.repository.HydrometerRepository;
import br.edu.ifbaiano.watermonitor.domain.repository.ReadingRepository;

@Service
public class ReadingService {

	@Autowired
	private ReadingRepository readingRepository;
	
	@Autowired
	private HydrometerRepository hydrometerRepository;
	
	@Autowired
	private HydrometerService hydrometerService;
	
	@Transactional
	public Reading save(Reading reading, Long hydrometerId) {
		Hydrometer hydrometer = hydrometerRepository.findById(hydrometerId).orElseThrow();
		
		Boolean isBigger = reading.readingValueGreaterThan(reading.getReading(), hydrometer.getDisplay());
		
		if(isBigger) {
			Integer consume = reading.consume(reading.getReading(), hydrometer.getDisplay());
			
			hydrometer.setDisplay(reading.getReading());
			reading.setHydrometer(hydrometer);
			reading.setConsume(consume);
			hydrometerService.save(hydrometer);
			
		}else {
			throw new DomainException("Valor menor que a última leitura, favor inserir um valor maior ou igual a "+hydrometer.getDisplay());
		}
				
		return readingRepository.save(reading);
	}
}