#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sum_int(int a, int b)
{
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int div_int(int a, int b)
{
    return a / b;
}
