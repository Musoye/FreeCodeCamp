char * _stdup(char *str);
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char * _stdup(char *str)
{
    char *p;
    int i, m;

    if (str == NULL){
        return (NULL);
    }

    m = strlen(str);

    if (m <= 0){
        return (NULL);
    }
    p = malloc((m + 1) * sizeof(char));
    if (p == NULL)
    {
        return (NULL);
    }
    for (i = 0; str[i]  != '\0'; i++)
    {
        p[i] = str[i];
    }
    p[i] = '\0';

    return (p);
}

int main(void){
    int i = 0;
    char *r = _stdup("Hello");
    while (r[i] != '\0')
    {
        printf("%c", r[i]);
        i++;
    }
}