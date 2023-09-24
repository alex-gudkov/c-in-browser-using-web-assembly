#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int main()
{
    printf("Hello World!\n");

    return 0;
}
