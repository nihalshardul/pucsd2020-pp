#include "../../include/calculator.h"
#include<string.h>
#include<ctype.h>
int MAX_STACK_SIZE=500;
// calculating while changing infix expression to postfix
float evaluate(char expression[]){ 
	int i; 
	// stack to store float operands. 
	float operands[MAX_STACK_SIZE]; 
	int operandsIndex=-1; // to manage index of Operands Stack
	// stack to store operators. 
	char operators[MAX_STACK_SIZE]; // to manage index of Operators Stack
	int operatorsIndex=-1; 
	
	for(i = 0; i < strlen(expression); i++){ 
		// handeling if there is space between operators and operands
        if(expression[i] == ' ') 
			continue; 
		else if(expression[i] == '('){ 
			operators[++operatorsIndex]=expression[i]; 
		} 
		
		else if(isdigit(expression[i])){
			float val = 0; 
            // changing string number to integer
			while(i < strlen(expression) && 
						isdigit(expression[i])) 
            { 
				val = (val*10) + (expression[i]-'0'); 
				i++; 
			}
			i--; 
			operands[++operandsIndex]=val; 
		} 
		else if(expression[i] == ')') 
		{ 
			while(!(operatorsIndex==-1) && operators[operatorsIndex] != '(') 
			{ 
				float secondOperand = operands[operandsIndex]; 
				operandsIndex--;
				
				float firstOperand = operands[operandsIndex]; 
				
				char operator = operators[operatorsIndex]; 
				operatorsIndex--;
				
				operands[operandsIndex]=applyOperation(firstOperand, secondOperand, operator); 
			} 
			if(!(operatorsIndex==-1))
			operatorsIndex--;
		} 
		else
		{ 
			while(!(operatorsIndex==-1) && 
                    precedence(operators[operatorsIndex]) >= precedence(expression[i])){ 
				float secondOperand = operands[operandsIndex]; 
				operandsIndex--;
				
				float firstOperand = operands[operandsIndex]; 
				
				char operator = operators[operatorsIndex]; 
				operatorsIndex--;
				
				operands[operandsIndex]=applyOperation(firstOperand, secondOperand, operator); 
			} 
			operators[++operatorsIndex]=expression[i]; 
		} 
	}  
    // left over stack calculation 
	while(!(operatorsIndex==-1)){ 
		float secondOperand = operands[operandsIndex]; 
		operandsIndex--;
				
		float firstOperand = operands[operandsIndex]; 
		
		char operator = operators[operatorsIndex]; 
		operatorsIndex--;
				
		operands[operandsIndex]=applyOperation(firstOperand, secondOperand, operator); 
	} 
	return operands[operandsIndex]; 
} 
