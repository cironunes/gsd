open Css;

type typography = {
  fontFamily: string,
  small: int,
  medium: int,
  large: int,
};

type colors = {
  black: string,
  white: string,
  primary: string,
  border: string,
  bodyBackground: string,
  bodyText: string,
};

type spacing = {
  small: int,
  medium: int,
  large: int,
};

type theme = {
  typography,
  colors,
  spacing,
};

let default = {
  typography: {
    fontFamily: "Fira Sans, sans-serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD4B39",
    border: "f0f0f0",
    bodyBackground: "ffffff",
    bodyText: "444444",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

let defaultDark = {
  typography: {
    fontFamily: "Fira Sans, sans-serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD4B39",
    border: "f0f0f0",
    bodyBackground: "444444",
    bodyText: "ffffff",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

let rainbow = {
  typography: {
    fontFamily: "Georgia, serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD3978",
    border: "f0f0f0",
    bodyBackground: "ffffff",
    bodyText: "444444",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

let rainbowDark = {
  typography: {
    fontFamily: "Georgia, serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primary: "DD3978",
    border: "f0f0f0",
    bodyBackground: "444444",
    bodyText: "ffffff",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

type size =
  | Small
  | Medium
  | Large;

let globalStyles = () => {
  global("html, #app", [height(pct(100.))]);
  global("body", [padding(zero), margin(zero), height(pct(100.))]);
};

let containerStyles = theme => {
  style([
    fontFamily(theme.typography.fontFamily),
    fontSize(px(theme.typography.medium)),
    backgroundColor(Css.hex(theme.colors.bodyBackground)),
    color(Css.hex(theme.colors.bodyText)),
    height(pct(100.)),
  ]);
};

let inputStyles = theme =>
  style([
    border(px(1), solid, Css.hex(theme.colors.border)),
    padding(px(theme.spacing.medium)),
  ]);

// Buttons
// ----------------------------------------
type buttonVariant =
  | Default
  | Primary;

let buttonStyles = (~theme, ~variant, ~size) => {
  let baseStyles =
    style([
      fontFamily(theme.typography.fontFamily),
      fontWeight(bold),
      switch (size) {
      | Small => padding(px(theme.spacing.small))
      | Medium => padding(px(theme.spacing.medium))
      | Large => padding(px(theme.spacing.large))
      },
    ]);

  switch (variant) {
  | Default =>
    merge([
      baseStyles,
      style([border(px(1), solid, Css.hex(theme.colors.border))]),
    ])
  | Primary =>
    merge([
      baseStyles,
      style([
        backgroundColor(Css.hex(theme.colors.primary)),
        color(Css.hex(theme.colors.white)),
        border(px(1), solid, Css.hex(theme.colors.primary)),
        padding(px(theme.spacing.medium)),
      ]),
    ])
  };
};