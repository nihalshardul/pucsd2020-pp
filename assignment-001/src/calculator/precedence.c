#include "../../include/calculator.h"
int precedence(char operator){ 
	if(operator == '+'||operator == '-') 
	return 1; 
	if(operator == '*'||operator == '/') 
	return 2; 
	return 0; 
} 
