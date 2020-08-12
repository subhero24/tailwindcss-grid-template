# Install

```
npm install tailwindcss-grid-template --save-dev
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

Then you can specify the size each column or row seperately with utility classes like `col-1-auto` and `col-2-fr`.

```html
<div class="grid grid-cols-2 col-1-auto col-2-fr"></div>
```

If you do not specify a column or row number like `row-auto` or `col-full`, the value is used for auto rows/columns.

Configuration of the values is done under the `gridTemplate` key in the tailwind config.

Default configuration looks like

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

Only grids with up to 6 rows and/or columns are supported.

Since this plugin uses CSS variables, internet explorer is not supported.
