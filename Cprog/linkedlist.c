#include "main.h"

/**
* print_list - prints all the elements of a list
* @h:pointer to the list
*Return: the number of nodes
*/
size_t print_list(const list_t *h)
{
    const list_t *point = h;
    size_t count = 0;

    while (point != NULL)
    {
        if (point->str != NULL)
            printf("[%d] %s\n", point->len, point->str);
        else
            printf("[0] (nil)\n");
        count += 1;
        point = point->next;
    }
    return (count);
}
/**
 * main - check the code
 *
 * Return: Always 0.
 */
int main(void)
{
    list_t *head;
    list_t *new;
    list_t hello = {"World", 5, NULL};
    size_t n;

    head = &hello;
    new = malloc(sizeof(list_t));
    if (new == NULL)
    {
        printf("Error\n");
        return (1);
    }
    new->str = strdup("Hello");
    new->len = 5;
    new->next = head;
    head = new;
    n = print_list(head);
    printf("-> %lu elements\n", n);

    printf("\n");
    free(new->str);
    new->str = NULL;
    n = print_list(head);
    printf("-> %lu elements\n", n);

    free(new);
    return (0);
}