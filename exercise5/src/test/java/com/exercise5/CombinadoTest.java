package com.exercise5;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

public class CombinadoTest {

	@Test
	void contarIngredientes() {
		CombinadoStub stub = new CombinadoStub();
		int resultado = stub.contarIngredientes();
		assertEquals(3, resultado);
		
		for(String cosa : stub.getIngredientes()) {
			System.out.println("Cosa actual: "+ cosa);
		}
	}
	
	public void obtenerUsuario() {
	}
}