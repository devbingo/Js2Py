// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp instance lastIndex property has the attribute DontDelete
es5id: 15.10.7.5_A9
description: Checking if deleting the lastIndex property fails
includes: [$FAIL.js]
---*/

__re = new RegExp;

//CHECK#0
if (__re.hasOwnProperty('lastIndex') !== true) {
  $FAIL('#0: __re = new RegExp; __re.hasOwnProperty(\'lastIndex\') === true');
}

//CHECK#1
if ((delete __re.lastIndex) !== false) {
  $ERROR('#1: __re = new RegExp; (delete __re.lastIndex) === false');
}

//CHECK#2
if (__re.hasOwnProperty('lastIndex') !== true) {
  $ERROR('#2: __re = new RegExp;delete __re.lastIndex === true; __re.hasOwnProperty(\'lastIndex\') === true');
}
