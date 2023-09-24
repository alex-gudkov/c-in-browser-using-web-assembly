#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sum_int_nums(int a, int b)
{
    return a + b;
}
