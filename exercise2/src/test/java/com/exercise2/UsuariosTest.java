package com.exercise2;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

public class UsuariosTest {

	// Instanciando variables
	Usuarios users = new Usuarios();
	Usuario user = new Usuario();
	
	// Variables
	private final String nombre = "pruebas";
	
	@BeforeEach
	void inicializa() {
		user.nombre = nombre;
	}
	
	@Test
	void creandoUsuario() {
		
		user.nombre = nombre;
		users.crear(user);
		
		Usuario userCreated = users.crear(user);
		
		assertEquals(userCreated.nombre, nombre);
	}
	
	@Test
	void pruebaGetUsuario() {
		
		user.nombre = nombre;
		
		users.crear(user);
		
		String result = users.buscar(user);
		
		assertEquals(nombre, result);
	}
	
	@Test
	void testGetUsuarioInexistent() {
		String result = users.buscar(user);
		assertEquals(null, result);
	}
	
	@Test
	void pruebaBorrarUsuario() {
		
		user.nombre = nombre;
		
		users.crear(user);
		
		boolean result = users.borrar(user);
		assertEquals(true, result);
	}
	
	@Test
	void borrarUsuarioInexistent() {
		boolean result = users.borrar(user);
		assertEquals(false, result);
	}
}