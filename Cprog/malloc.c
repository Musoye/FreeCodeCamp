#include <stdio.h>
#include <stdlib.h>
void simple_print_buffer(char *buffer, unsigned int size);
char *create_array(unsigned int size, char c);

void simple_print_buffer(char *buffer, unsigned int size)
{
    unsigned int i;

    i = 0;
    while (i < size)
    {
        if (i % 10)
        {
            printf(" ");
        }
        if (!(i % 10) && i)
        {
            printf("\n");
        }
        printf("0x%c", buffer[i]);
        i++;
    }
    printf("\n");
}
/**
 * create_array - It creates arrya nd intotialize somkething in it
 * @size: the size of the array to generate
 * @c: what to initialize
 * return: the pointer to the array
*/
char *create_array(unsigned int size, char c)
{
    char *p;
    unsigned int i = 0;
    if (size == 0)
    {
        return (NULL);
    }

    p = malloc(sizeof(char) * size);

    if (p == NULL)
    {
        return (NULL);
    }

    while (i < size)
    {
        p[i] = c;
        i++;
    }

    return (p);
}

/**
 * main - check the code for ALX School students.
 *
 * Return: Always 0.
 */
int main(void)
{
    char *buffer;

    buffer = create_array(98, 'H');
    if  (buffer == NULL)
    {
        printf("failed to allocate memory\n");
        return (1);
    }
    simple_print_buffer(buffer, 98);
    free(buffer);
    return (0);
}