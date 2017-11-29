//super zapis, viac priamociary a podobny z inych jazykov
var objekt = {
    sum (a, b) {
        return a+b;
    },
    substract (x, y) {
        //…
    },
    *test (x, y) {
        //…
    }
};

//tiez potesi :)
var objekt2 = {
    foo: "bar",
    [ "baz" + objekt.sum(2,3) ]: 42
};