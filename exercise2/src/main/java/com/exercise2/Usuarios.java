package com.exercise2;

import java.util.ArrayList;

public class Usuarios {

	ArrayList<Usuario> users = new ArrayList();
	
	public Usuario crear(Usuario user) {
		users.add(user);
		return user;
	}
	
	public String buscar(Usuario user) {
		for (Usuario actual : users) {
			if (actual.nombre.equals(user.nombre)) {
				return actual.nombre;
			}
		}
		
		users.stream().filter(u -> u.nombre == user.nombre);
		
		return null;
	}
	
	public boolean borrar(Usuario user) {
		return users.remove(user);
	}
}