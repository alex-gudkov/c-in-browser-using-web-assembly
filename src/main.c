#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sum_int_nums(int a, int b)
{
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int sub_int_nums(int a, int b)
{
    return a - b;
}

EMSCRIPTEN_KEEPALIVE
int mul_int_nums(int a, int b)
{
    return a * b;
}

EMSCRIPTEN_KEEPALIVE
int div_int_nums(int a, int b)
{
    return a / b;
}
