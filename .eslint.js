module.exports = {
	env: {
		node: true,
	},

	/*
	 *  0 - disable
	 *      Rules that more harmful than useful, or just buggy.
	 *
	 *  1 - warning
	 *      Rules that we didn't encounter yet. You can safely ignore them,
	 *      but I'd like to know any interesting use-cases they forbid.
	 *
	 *  2 - error
	 *      Rules that have proven to be useful, please follow them.
	 */

	rules: {
		// didn't understand what it does, but it fails a good code
		'block-scoped-var': 0,

		// fails where newlines are used to format pretty big "if":
		// if (
		//    name.charAt(0) === "." ||
		//    name.match(/[\/@\s\+%:]/) ||
		//    name !== encodeURIComponent(name) ||
		//    name.toLowerCase() === "node_modules"
		// ) {
		'brace-style': 0,

		// snake_case is more readable, what's up with you guys?
		'camelcase': 0,

		// if some functions are complex, they are for a good reason,
		// ain't worth it
		'complexity': [0, 10],

		// never saw it, but self is preferred
		'consistent-this': [1, 'self'],

		// fails good code
		'curly': 0,

		// fails good code, where this notation is used for consistency:
		//   something['foo-bar'] = 123
		//   something['blahblah'] = 234
		'dot-notation': 0,

		// pointless in many cases (like indexOf() == -1), harmful in a few
		// cases (when you do want to ignore types), fails good code
		'eqeqeq': 0,

		// if someone is changing prototype and makes properties enumerable,
		// it's their own fault
		'guard-for-in': 0,

		// if some functions are complex, they are for a good reason,
		// ain't worth it
		'max-depth': [0, 4],

		// should it really throw for every long URL?
		'max-len': [0, 80, 4],

		// that's obvious by just looking at the code, you don't need lint for that
		'max-params': [0, 3],

		// if some functions are complex, they are for a good reason,
		// ain't worth it
		'max-statements': [0, 10],

		// that one makes sense
		'new-cap': 2,

		'new-parens': 1,
		'no-alert': 1,

		// I'm writing javascript, not some weird reduced version of it
		'no-bitwise': 0,

		'no-caller': 1,

		// not working around IE bugs, sorry
		'no-catch-shadow': 0,

		// see above, IE is useful for downloading other browsers only
		'no-comma-dangle': 0,

		'no-cond-assign': 1,

		// good for removing debugging code
		'no-console': 2,

		'no-control-regex': 1,

		// good for removing debugging code
		'no-debugger': 2,

		'no-delete-var': 1,
		'no-div-regex': 1,
		'no-dupe-keys': 1,

		// why would anyone need to check against that?
		'no-else-return': 0,

		// sometimes empty statement contains useful comment
		'no-empty': 0,

		'no-empty-class': 1,
		'no-empty-label': 1,

		// stupid rule
		// "x == null" is "x === null || x === undefined"
		'no-eq-null': 0,

		'no-eval': 1,
		'no-ex-assign': 1,
		'no-extend-native': 1,

		// fails good code, when parens are used for grouping:
		//   (req && req.headers['via']) ? req.headers['via'] + ', ' : ''
		// not everyone remembers priority tables, you know
		'no-extra-parens': 0,

		// fails defensive semicolons:
		//   ;['foo', 'bar'].forEach(function(x) {})
		'no-extra-semi': 0,

		'no-fallthrough': 1,
		'no-floating-decimal': 1,
		'no-func-assign': 1,
		'no-global-strict': 1,
		'no-implied-eval': 1,
		'no-invalid-regexp': 1,
		'no-iterator': 1,
		'no-label-var': 1,
		'no-loop-func': 1,

		// fails good code:
		//   var fs   = require('fs'),
		//     , open = fs.open
		'no-mixed-requires': [0, false],

		'no-multi-str': 1,
		'no-native-reassign': 1,
		'no-negated-in-lhs': 1,

		// XXX: not released yet
		//'no-nested-ternary': 1,

		'no-new': 1,

		// new Array(12) is used to pre-allocate arrays
		'no-new-array': 0,

		'no-new-func': 1,
		'no-new-object': 1,
		'no-new-wrappers': 1,
		'no-obj-calls': 1,

		// fails good code:
		//   fs.open('/file', 0666, function(){})
		'no-octal': 0,

		// fails good code:
		//   console.log('\033[31m' + str + '\033[39m')
		// also fails \0 which is not octal escape
		'no-octal-escape': 0,

		// I'm writing javascript, not some weird reduced version of it
		'no-plusplus': 0,

		'no-proto': 1,

		// fails good code:
		//   if (a) {
		//      var x = 'foo'
		//   } else {
		//      var x = bar
		//   }
		'no-redeclare': 0,

		'no-return-assign': 1,
		'no-script-url': 1,
		'no-self-compare': 1,

		// sometimes useful, often isn't
		// probably worth enforcing
		'no-shadow': 2,

		'no-shadow-restricted-names': 1,
		'no-spaced-func': 1,

		// can't agree more, but it's a task for code review, not for lint
		'no-sync': 0,

		// I'm writing javascript, not some weird reduced version of it
		'no-ternary': 0,

		// the single most important rule in the entire ruleset
		'no-undef': 2,

		'no-undef-init': 1,

		// it is failing our own underscores
		'no-underscore-dangle': 0,

		// fails function hoisting
		'no-unreachable': 0,

		// fails npm-style code, it's good once you get used to it:
		//   if (typeof(options) === 'function') callback = options, options = {}
		'no-unused-expressions': 0,

		// fails (function(_err) {}) where named argument is used to show what
		// nth function argument means
		'no-unused-vars': 0,

		// fails function hoisting
		'no-use-before-define': 0,

		'no-with': 1,

		// fails foobar( (function(){}).bind(this) )
		// parens are added for readability
		'no-wrap-func': 0,

		// fails good code:
		//   var x
		//   if (something) {
		//      var y
		'one-var': 0,

		// the most stupid rule I ever saw
		'quote-props': 0,

		// fails situation when different quotes are used to avoid escaping
		'quotes': [0, 'single'],

		'radix': 1,
		'regex-spaces': 1,

		// http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
		'semi': 0,

		// fails good code where spaces are used for grouping:
		//   (x+y * y+z)
		'space-infix-ops': 0,

		'space-return-throw-case': 1,

		// typeof(something) should have braces to look like a function
		// a matter of taste I suppose
		'space-unary-word-ops': 0,

		// strict mode is just harmful,
		// can I have a check to enforce not using it?
		'strict': 0,

		'unnecessary-strict': 1,
		'use-isnan': 1,
		'wrap-iife': 1,
		'wrap-regex': 1,
	},
}
