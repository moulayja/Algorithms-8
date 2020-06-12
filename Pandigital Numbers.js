function isPandigital(num) {
	return new Set(num.toString().split('')).size===10
}