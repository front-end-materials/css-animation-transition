# CSS caption transition on hover

A simple CSS animation for a common visual effect, using the `transition` property.

## How `transition` works

The `transition` property simply "prepares" an element for a style transition - it does NOT trigger the transition:

```css
figcaption {
  /* figcaption styles here */
  transition: all .5s;
}
```

The styles that transition are only applied to the element when they're triggered.

In this example the CSS `transition` is triggered by **hovering** over the`figure` element (the *parent* of the `figcaption` element) - `transition` is then applied to `all` the styles in the `:hover` pseudo-class over 0.5 seconds:

```css
figure:hover figcaption {
  /* figcaption transition styles here */
}
```