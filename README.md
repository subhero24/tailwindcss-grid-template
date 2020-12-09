# Install

```
npm install tailwindcss-grid-template -D
```

Add the plugin to your tailwind config file

```javascript
const gridTemplatePlugin = require("tailwindcss-grid-template");

module.exports = {
	plugins: [gridTemplatePlugin],
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

Configuration of the values is done under the `gridTemplateRow` and ``gridTemplateColumn` key in the tailwind config.

Default configuration looks like

```js
module.exports = {
	theme: {
		gridTemplateRow: {
			fr: "1fr",
			min: "min-content",
			max: "max-content",
			auto: "auto",
			full: "100%",
			default: "minmax(0,1fr)",
		},
		gridTemplateColumn: {
			fr: "1fr",
			min: "min-content",
			max: "max-content",
			auto: "auto",
			full: "100%",
			default: "minmax(0,1fr)",
		},
	},
	variants: {
		gridTemplateRow: ["responsive"],
		gridTemplateColumn: ["responsive"],
	},
};
```

Only grids with up to 6 rows and/or columns are supported.

Since this plugin uses CSS variables, internet explorer is not supported.
