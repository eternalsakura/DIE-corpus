//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var a = b = c = 1;

try {
  ;
} catch ([a, b, c]) {
  function f() {
    new.target;
  }
}
