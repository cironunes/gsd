'use strict';

var React = require("react");
var Util$Gsd = require("../Util.bs.js");
var Theme$Gsd = require("../Theme.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function Input(Props) {
  var type_ = Props.type_;
  var value = Props.value;
  var onChange = Props.onChange;
  var placeholder = Props.placeholder;
  var dataTestid = Props.dataTestid;
  var tmp = {
    className: Theme$Gsd.inputStyles(Theme$Gsd.$$default),
    type: type_
  };
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  if (value !== undefined) {
    tmp.value = Caml_option.valFromOption(value);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  var input = React.createElement("input", tmp);
  if (dataTestid !== undefined) {
    return React.createElement(Util$Gsd.WithTestId.make, {
                id: dataTestid,
                children: input
              });
  } else {
    return input;
  }
}

var make = Input;

exports.make = make;
/* react Not a pure module */
