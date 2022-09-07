package com.exercise4;

import java.util.ArrayList;

public class DatosFalsos {

	public DatosFalsos() {
		System.out.println("Datos conectados en producción");
	}
	
	public ArrayList<Double> getData() {
		ArrayList<Double> retorno = new ArrayList();
		retorno.add(1.0);
		retorno.add(2.0);
		retorno.add(3.0);
		return retorno;
	}
}