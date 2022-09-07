package com.exercise3;

import java.util.ArrayList;

public class Usuarios {

	ArrayList<Usuario> users = new ArrayList<>();
	
	public boolean crear(Usuario user) {
		return users.add(user);
	}
	
	public boolean borrar(Usuario user) {
		return users.remove(user);
	}
	
	public ArrayList<Usuario> obtener() {
		return users;
	}
}

class UsuariosCondition {
	
	static boolean crearUsuario(Usuario user) {
		Usuarios users = new Usuarios();
		return users.crear(user);
	}
}