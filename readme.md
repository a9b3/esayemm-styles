# esayemm-styles

Shared styles for react-starter-kit boilerplate.

This is meant to be used with a webpack project with sensible style loaders.
Expecting to have postcss-loader (autoprefixer, precss), css-loader, style-loader.

## Installation

```
npm i --save esayemm-styles
```

Source inside your project.

```css
// inside css

@import 'esayemm-styles';

div {
  // card is a class in esayemm-styles
  composes: card;
}
```
