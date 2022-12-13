"use strict";
function 타입추론() {
    let x = 10;
    // 타입스크립트에서 할당할 수 없게 된다.
    // x = '안녕?' 
    x = 5;
}
function 타입명시(a) {
    let x = '안녕?';
    return x + a;
}
타입명시('..미안...');
