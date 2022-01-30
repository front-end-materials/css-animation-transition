# CSS caption transition on hover

A simple CSS animated image caption, using the `transition` property.

Note: for longer captions, the second image uses CSS `line-clamp` which is supported at present with the `-webkit` prefix. THe full caption could be shown when clicking to show a larger image. The `figcaption` line-height is adjusted manually to prevent a portion of the text appearing below the ellipsis—this depends on the font settings.

## How `transition` works

The `transition` property simply "prepares" an element for a style transition - it does NOT trigger the transition:

```css
figcaption {
  /* figcaption styles here */
  transition: all .5s;
}
```

The styles that transition are only applied to the element when they're triggered.

In this example `transition` is triggered by **hovering** over the`figure` element (the *parent* of the `figcaption` element) - `transition` is then applied to `all` the styles in the `:hover` pseudo-class over 0.5 seconds:

```css
figure:hover figcaption {
  /* figcaption transition styles here */
}
```