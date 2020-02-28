'use strict';

var React = require("react");
var Util$Gsd = require("../Util.bs.js");
var Theme$Gsd = require("../Theme.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ThemeContext$Gsd = require("../ThemeContext.bs.js");

function Button(Props) {
  var children = Props.children;
  var onClick = Props.onClick;
  var type_ = Props.type_;
  var dataTestid = Props.dataTestid;
  var $staropt$star = Props.size;
  var $staropt$star$1 = Props.variant;
  var size = $staropt$star !== undefined ? $staropt$star : /* Medium */1;
  var variant = $staropt$star$1 !== undefined ? $staropt$star$1 : /* Default */0;
  var theme = React.useContext(ThemeContext$Gsd.themeContext);
  var styles = Theme$Gsd.buttonStyles(theme, variant, size);
  var tmp = {
    className: styles
  };
  if (type_ !== undefined) {
    tmp.type = Caml_option.valFromOption(type_);
  }
  if (onClick !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onClick);
  }
  var button = React.createElement("button", tmp, children);
  if (dataTestid !== undefined) {
    return React.createElement(Util$Gsd.WithTestId.make, {
                id: dataTestid,
                children: button
              });
  } else {
    return button;
  }
}

var make = Button;

exports.make = make;
/* react Not a pure module */
