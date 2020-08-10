let plugin = require("tailwindcss/plugin");

let defaultOptions = {
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

function gridTemplatePlugin({ addUtilities, variants, theme }) {
	const dimensions = { rows: 6, columns: 6 };

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let utilities = {};
	for (let direction in dimensions) {
		let number = dimensions[direction];
		let abbreviation = direction.toLowerCase().slice(0, 3);
		for (let i = 1; i <= number; ++i) {
			let styles = {};
			let stylesTemplate = [];
			let selector = `.grid-${abbreviation}s-${i}`;

			for (let j = 1; j <= i; ++j) {
				let variable = `--grid-${abbreviation}-${j}`;

				styles[variable] = "minmax(0,1fr)";
				stylesTemplate.push(`var(${variable})`);
			}

			styles[`gridTemplate${capitalizeFirstLetter(direction)}`] = stylesTemplate.join(" ");

			utilities[selector] = styles;
		}
	}

	let config = theme("gridTemplate");
	for (let direction in dimensions) {
		let number = dimensions[direction];
		let abbreviation = direction.toLowerCase().slice(0, 3);

		for (let i = 1; i <= number; ++i) {
			for (let description in config) {
				utilities[`.${abbreviation}-${i}-${description}`] = {
					[`--grid-${abbreviation}-${i}`]: config[description],
				};
			}
		}
	}

	addUtilities(utilities, variants("gridTemplate"));
}

module.exports = plugin(gridTemplatePlugin, defaultOptions);
