// funky stuff happens with the default export

// this should be remain fat arrow function for main build, but be a function def for lib
const something = (n) => Math.cbrt(n)

export default something
