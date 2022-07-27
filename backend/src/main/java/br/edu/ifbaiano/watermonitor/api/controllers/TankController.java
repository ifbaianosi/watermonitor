package br.edu.ifbaiano.watermonitor.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.model.TankDailyControl;
import br.edu.ifbaiano.watermonitor.domain.repository.TankRepository;

@RestController
@RequestMapping("/tanks")
public class TankController {

	@Autowired
	private TankRepository tankRepository;
	
	@GetMapping
	public List<Tank> list () {
		
		 List<Tank> tank = tankRepository.findAllWithLastDailyControl();
		 
		 dailyControlRecent(tank);
		 		
		 return tank;
		
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Tank create(@RequestBody Tank tank) {
		return tankRepository.save(tank);
	}
		
	private List<Tank> dailyControlRecent(List<Tank> tank){
		
		TankDailyControl tankDailyControl;
		
		for(int i = 0; i<tank.size(); i++) {
			int n = tank.get(i).getTankDailyControl().size();
			
			tankDailyControl = tank.get(i).getTankDailyControl().get(n-1);
			tank.get(i).getTankDailyControl().removeAll(tank.get(i).getTankDailyControl());
			tank.get(i).getTankDailyControl().add(tankDailyControl);

		}
		
		return tank;
	}
}
