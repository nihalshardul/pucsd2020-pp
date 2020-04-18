#include "include/calculator.h"
#include<stdio.h>
#include<string.h>

int MAX_SIZE=500;
void main() { 
	float result;
    char expression[MAX_SIZE];
    printf("Arithematic Calculator (Enter q to exit)\n");
    while(1)
    {
        printf(">>> ");
        scanf("%[^\n]%*c",expression);
        if(strcmp(expression,"q")==0)
            break;
        int check=validateExpression(expression);
        if(check){
            result=evaluate(expression);
            printf(">>> %f\n",result);
        }
        else
        {
            printf(">>> Invalid Expression\n");
        }
        
    }

} 
