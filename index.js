let plugin = require("tailwindcss/plugin");

let defaultOptions = {
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

function gridTemplatePlugin({ addUtilities, variants, theme }) {
	const dimensions = { row: 6, column: 6 };

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	for (let direction in dimensions) {
		let utils = {};
		let number = dimensions[direction];
		let abbreviatedDirection = direction.slice(0, 3);
		let capitalizedDirection = capitalizeFirstLetter(direction);

		let config = theme(`gridTemplate${capitalizedDirection}`);

		for (let i = 1; i <= number; ++i) {
			let styles = {};
			let stylesTemplate = [];
			let selector = `.grid-${abbreviatedDirection}s-${i}`;

			for (let j = 1; j <= i; ++j) {
				let variable = `--grid-${abbreviatedDirection}-${j}`;

				styles[variable] = "minmax(0,1fr)";
				stylesTemplate.push(`var(${variable})`);
			}

			styles[`gridTemplate${capitalizedDirection}s`] = stylesTemplate.join(" ");

			utils[selector] = styles;
		}

		for (let description in config) {
			for (let i = 1; i <= number; ++i) {
				utils[`.${abbreviatedDirection}-${i}-${description}`] = {
					[`--grid-${abbreviatedDirection}-${i}`]: config[description],
				};
			}
		}

		addUtilities(utils, variants(`gridTemplate${capitalizedDirection}`));
	}
}

module.exports = plugin(gridTemplatePlugin, defaultOptions);
