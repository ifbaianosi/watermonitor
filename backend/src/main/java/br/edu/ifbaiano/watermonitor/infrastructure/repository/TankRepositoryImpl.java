package br.edu.ifbaiano.watermonitor.infrastructure.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import br.edu.ifbaiano.watermonitor.domain.model.Tank;
import br.edu.ifbaiano.watermonitor.domain.repository.TankRepositoryQueries;

@Repository
public class TankRepositoryImpl implements TankRepositoryQueries {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Tank> findFirst() {
		
		String jpql = "select distinct(t), tdc from Tank t left join fetch t.tankDailyControl tdc order by tdc.createdAt desc";
		
		return entityManager.createQuery(jpql, Tank.class)
			.getResultList();
	}


}
