#include <stdio.h>
#include <unistd.h>

int main(void)
{
    //pid_t is a datatype that represent process ID's

    int my_pid = getpid();
    int my_ppid = getppid();
    printf("The child ID is %d\n", my_pid);
    printf("The parent ID is %d\n", my_ppid);
    return (0);
}