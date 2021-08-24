Algoritmo CompararEdad
	Definir edad Como entero;
	Escribir "INGRESA UNA EDAD";
	Leer edad;
	Si (edad > 12 y edad < 18) Entonces
		Imprimir "ERES MENOR DE EDAD";
	Fin Si
	Si (edad > 18 y edad < 60) Entonces
		Imprimir "ERES UN ADULTO";
	Fin Si
	Si (edad > 60) Entonces
		Imprimir "ERES UN ADULTO MAYOR";
	Fin Si
	
FinAlgoritmo
