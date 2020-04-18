#include "../../include/calculator.h"

float applyOperation(float firstOperand, float secondOperand, char operator){ 
	switch(operator){ 
		case '+': return addition(firstOperand,secondOperand); 
		case '-': return substraction(firstOperand,secondOperand); 
		case '*': return multiplication(firstOperand,secondOperand); 
		case '/': return division(firstOperand,secondOperand); 
	} 
} 
