package com.exercise3;

import static org.junit.Assume.assumeTrue;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.*;

public class OperacionesTest {

	@Test
	// @EnabledIf(value = "com.exercise3.OperacionesCondition#mustBeRun")
	// @EnabledIfSystemProperty(named = "os.arch", matches = "x86_64")
	// @DisabledOnOs({OS.LINUX, OS.MAC})
	// @DisabledOnOs(value = OS.WINDOWS)
	// @EnabledOnJre({JRE.JAVA_17, JRE.JAVA_18})
	// @EnabledForJreRange(min = JRE.JAVA_17, max = JRE.JAVA_14)
	@Tag("desarrollo")
	void verificarSuma() {
		// String system = System.getProperty("os.name");
		// assumeTrue(system.equalsIgnoreCase("Windows 10"));
		// System.out.println("Estoy en una prueba para Windows");
		/*
		 * for (String actual : System.getProperties().stringPropertyNames()) {
		 * System.out.println(actual + ": "+ System.getProperty(actual)); }
		 */
		// System.out.println(System.getProperty("os.arch"));
		System.out.println("Estoy en verificarSume()");
	}

	@Test
	@Tag("production")
	void verificarResta() {
		System.out.println("Estoy en verificarResta()");
	} 
}