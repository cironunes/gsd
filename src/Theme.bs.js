'use strict';

var Css = require("bs-css/src/Css.js");

function globalStyles(param) {
  Css.$$global("html, #app", /* :: */[
        Css.height(Css.pct(100)),
        /* [] */0
      ]);
  return Css.$$global("body", /* :: */[
              Css.padding(Css.zero),
              /* :: */[
                Css.margin(Css.zero),
                /* :: */[
                  Css.height(Css.pct(100)),
                  /* [] */0
                ]
              ]
            ]);
}

function containerStyles(theme) {
  return Css.style(/* :: */[
              Css.fontFamily(theme.typography.fontFamily),
              /* :: */[
                Css.fontSize(Css.px(theme.typography.medium)),
                /* :: */[
                  Css.backgroundColor(Css.hex(theme.colors.bodyBackground)),
                  /* :: */[
                    Css.color(Css.hex(theme.colors.bodyText)),
                    /* :: */[
                      Css.height(Css.pct(100)),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function inputStyles(theme) {
  return Css.style(/* :: */[
              Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.border)),
              /* :: */[
                Css.padding(Css.px(theme.spacing.medium)),
                /* [] */0
              ]
            ]);
}

function buttonStyles(theme, variant, size) {
  var tmp;
  switch (size) {
    case /* Small */0 :
        tmp = Css.padding(Css.px(theme.spacing.small));
        break;
    case /* Medium */1 :
        tmp = Css.padding(Css.px(theme.spacing.medium));
        break;
    case /* Large */2 :
        tmp = Css.padding(Css.px(theme.spacing.large));
        break;
    
  }
  var baseStyles = Css.style(/* :: */[
        Css.fontFamily(theme.typography.fontFamily),
        /* :: */[
          Css.fontWeight(Css.bold),
          /* :: */[
            tmp,
            /* [] */0
          ]
        ]
      ]);
  if (variant) {
    return Css.merge(/* :: */[
                baseStyles,
                /* :: */[
                  Css.style(/* :: */[
                        Css.backgroundColor(Css.hex(theme.colors.primary)),
                        /* :: */[
                          Css.color(Css.hex(theme.colors.white)),
                          /* :: */[
                            Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.primary)),
                            /* :: */[
                              Css.padding(Css.px(theme.spacing.medium)),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]),
                  /* [] */0
                ]
              ]);
  } else {
    return Css.merge(/* :: */[
                baseStyles,
                /* :: */[
                  Css.style(/* :: */[
                        Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.border)),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]);
  }
}

var $$default = {
  typography: {
    fontFamily: "Fira Sans, sans-serif",
    small: 11,
    medium: 16,
    large: 20
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD4B39",
    border: "f0f0f0",
    bodyBackground: "ffffff",
    bodyText: "444444"
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36
  }
};

var defaultDark = {
  typography: {
    fontFamily: "Fira Sans, sans-serif",
    small: 11,
    medium: 16,
    large: 20
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD4B39",
    border: "f0f0f0",
    bodyBackground: "444444",
    bodyText: "ffffff"
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36
  }
};

var rainbow = {
  typography: {
    fontFamily: "Georgia, serif",
    small: 11,
    medium: 16,
    large: 20
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD3978",
    border: "f0f0f0",
    bodyBackground: "ffffff",
    bodyText: "444444"
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36
  }
};

var rainbowDark = {
  typography: {
    fontFamily: "Georgia, serif",
    small: 11,
    medium: 16,
    large: 20
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD3978",
    border: "f0f0f0",
    bodyBackground: "444444",
    bodyText: "ffffff"
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36
  }
};

exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.defaultDark = defaultDark;
exports.rainbow = rainbow;
exports.rainbowDark = rainbowDark;
exports.globalStyles = globalStyles;
exports.containerStyles = containerStyles;
exports.inputStyles = inputStyles;
exports.buttonStyles = buttonStyles;
/* Css Not a pure module */
