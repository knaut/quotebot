// simple shared webpack configuration block for babel settings

module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	],
	plugins: [
		'babel-plugin-styled-components',
		'@babel/plugin-proposal-class-properties'
	]
}