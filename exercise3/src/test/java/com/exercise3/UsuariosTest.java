package com.exercise3;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.EnabledIf;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class UsuariosTest {

	Usuarios users = new Usuarios();
	Usuario user = new Usuario();

	@ParameterizedTest
	@ValueSource(strings = {"pepe", "juan", "manolo"})
	void testCrear() {
		user.nombre = "prueba";
		assertEquals(true, users.crear(user));
		
		for (Usuario user : users.obtener()) {
			System.out.println("Usuario: "+ user.nombre);
		}
	}

	@Nested
	@EnabledIf("com.exercise3")
	public class UsuarioCreado {

		@BeforeEach
		void init () {
			user.nombre = "prueba";
			users.crear(user);
		}
		
		@Test
		void testBorrar() {
			assertEquals(true, users.borrar(user));
		}

		@Test
		@DisplayName("¿Tengo usuarios?")
		@Order(1)
		void listar() {
			ArrayList<Usuario> listar = users.obtener();
			System.out.println(listar.size());
			assertNotEquals(listar.size() == 0, listar);
		}
	}
}