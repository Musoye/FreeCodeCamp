#ifndef MAIN_H
#define MAIN_H
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct list_s {
    char* str;
    unsigned int len;
    struct lists_s *next;
} list_t;
size_t print_list(const list_t *h);
#endif /*MAIN_H*/