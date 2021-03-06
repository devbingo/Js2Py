// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-9-b-ii-1
description: >
    Array.prototype.indexOf - type of array element is different from
    type of search element
includes: [runTestCase.js]
---*/

function testcase() {

        return ["true"].indexOf(true) === -1 &&
            ["0"].indexOf(0) === -1 &&
            [false].indexOf(0) === -1 &&
            [undefined].indexOf(0) === -1 &&
            [null].indexOf(0) === -1 &&
            [[]].indexOf(0) === -1;
    }
runTestCase(testcase);
