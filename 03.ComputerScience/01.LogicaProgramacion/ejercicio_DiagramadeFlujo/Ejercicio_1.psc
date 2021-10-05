Algoritmo Ejercicio_1
	Definir A Como Entero;
	Escribir "Asigna un valor numerico a A";
	Definir B Como Entero;
	Escribir "Asigna un valor numerico a B";
	Definir C Como Entero;
	Escribir "Asigna un valor numerico a C"
	Leer A B C;
	
	Si (A > B y A > C) Entonces
		Imprimir "A es el mayor";
		Si (B < C) Entonces
			Imprimir "B es el menor";
		SiNo
			Imprimir "C es el menor";
		Fin Si
	Fin Si
	
	Si (B > A y B > C) Entonces
		Imprimir "B es el mayor";
		Si (A < C) Entonces
			Imprimir "A es el menor";
		SiNo
			Imprimir "C es el menor";
		Fin Si
		
	SiNo
		Imprimir "C es el mayor";
		Si (A < B) Entonces
			Imprimir "A es el menor";
		SiNo
			Imprimir "B es el menor";
		Fin Si
	Fin Si
	
FinAlgoritmo
