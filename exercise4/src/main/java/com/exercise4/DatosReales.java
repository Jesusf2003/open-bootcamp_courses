package com.exercise4;

import java.util.ArrayList;

public class DatosReales {

	public DatosReales() {
		System.out.println("Datos conectados en producción");
	}
	
	public void esReal() {
	}
	
	public ArrayList<Double> getData() {
		ArrayList<Double> retorno = new ArrayList();
		for(int i = 0; i < 3; i++) {
			double valor = Math.random() * 100;
			retorno.add(valor);
		}
		return retorno;
	}
}