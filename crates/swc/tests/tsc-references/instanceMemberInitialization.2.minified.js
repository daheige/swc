//// [instanceMemberInitialization.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C), this.x = 1;
}, c = new C();
c.x = 3;
var c2 = new C();
c.x, c2.x;
