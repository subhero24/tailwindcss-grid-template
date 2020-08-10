# Install

```
npm install tailwindcss-grid-template
```

Add the plugin to your tailwind config file

```javascript
module.exports = {
	plugins: [require("tailwindcss-grid-template")],
};
```

# Usage

Define your grid like you would normally do with the tailwind classes

```html
<div class="grid grid-cols-2"></div>
```

Add extra classes from this plugin to specify the size of rows and/or columns individually.

```html
<div class="grid grid-cols-2 col-1-auto col-2-fr"></div>
```

This makes the first column "auto" and the second column "1fr".
For each of these classes you specify row or column first, following the number of that row/column, and finally a size for that row/column. You can specify the sizes of the columns in your tailwind config.
The configuration defaults to

```js
module.exports = {
	theme: {
		gridTemplate: {
			fr: "1fr",
			auto: "auto",
			full: "100%",
			min: "min-content",
			max: "max-content",
		},
	},
	variants: {
		gridTemplate: ["responsive"],
	},
};
```

So `row-3-full` would make the 3rd row of the grid "100%".

Utility classes are generated for up to 6 columns/rows.
Since this plugin uses CSS variables, internet explorer is not supported.
