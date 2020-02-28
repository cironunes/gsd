'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$Gsd = require("./Theme.bs.js");
var ThemeContext$Gsd = require("./ThemeContext.bs.js");
var TaskContainer$Gsd = require("./TaskContainer.bs.js");

function getNextId(param) {
  return new Date().getTime() | 0;
}

Theme$Gsd.globalStyles(/* () */0);

var Styles = { };

function App(Props) {
  var match = React.useState((function () {
          return Theme$Gsd.$$default;
        }));
  var changeTheme = match[1];
  var theme = match[0];
  return React.createElement("div", {
              className: Theme$Gsd.containerStyles(theme)
            }, React.createElement("div", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(changeTheme, (function (param) {
                                        return Theme$Gsd.$$default;
                                      }));
                        })
                    }, "Default"), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(changeTheme, (function (param) {
                                        return Theme$Gsd.defaultDark;
                                      }));
                        })
                    }, "Dark mode"), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(changeTheme, (function (param) {
                                        return Theme$Gsd.rainbow;
                                      }));
                        })
                    }, "Rainbow"), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(changeTheme, (function (param) {
                                        return Theme$Gsd.rainbowDark;
                                      }));
                        })
                    }, "Rainbow Dark")), React.createElement(ThemeContext$Gsd.make, ThemeContext$Gsd.makeProps(theme, React.createElement(TaskContainer$Gsd.make, {
                          getNextId: getNextId
                        }), /* () */0)));
}

var make = App;

exports.getNextId = getNextId;
exports.Styles = Styles;
exports.make = make;
/*  Not a pure module */
