function lambdaDepth(num) {
	return num === 0 ? 'edabit' : () => lambdaDepth(num - 1)
}