package com.exercise1;

import java.io.IOException;

public class Aritmetica {

	public double suma(double a, double b) {
		return a + b;
	}
	
	public double resta(double a, double b) {
		return a - b;
	}
	
	public double fallo() throws IOException {
		throw new IOException();
	}
}