package com.exercise1;

import static org.junit.Assume.assumeTrue;
import static org.junit.jupiter.api.Assertions.*;

import java.io.IOException;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class AritmeticaTest {

	Aritmetica arit = new Aritmetica();
	
	@BeforeAll
	static void init() {
		System.out.println("Antes de todos los test");
	}

	@BeforeEach
	void before() {
		System.out.println("Antes del Test actual");
	}

	@AfterEach
	void afterEach() {
		System.out.println("Después del Test actual");
	}

	@AfterAll
	static void after() {
		System.out.println("Test finalizado");
	}

	// @ParameterizedTest
	// @ValueSource(doubles = {8, 4})
	void testSuma(double a) {
		double result = arit.suma(4, 4);
		assertEquals(result, a);
	}

	// @Test
	// @DisplayName("Probando testing con Junit")
	// @RepeatedTest(value = 5, name = "test: {displayname}, iteraciones: {totalRepetitions}, actual: {currentRepetition}")
	void ejecutarTest() {
		double result = arit.suma(4, 4);
		
		// System.out.println("Total de repeticiones: "+ info.getTotalRepetitions());
		
		// assertEquals(result, 8);
		assertTrue(5 > 1);
		
		/*
		 * assertAll( "sumadores", // Verificar un resultado anticipado () ->
		 * assertEquals(result, 8), () -> assertEquals(result2, 10) );
		 */
	}

	@Test
	void probarSumas() {
		String os = System.getProperty("os.name");
		System.out.println(System.getProperties());
		
		assumeTrue(os.equalsIgnoreCase("Windows 10"));
		Throwable exception = assertThrows( IOException.class, ()->arit.fallo());
	}
}