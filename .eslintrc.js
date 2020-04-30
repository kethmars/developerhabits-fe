var OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
    rules: {
      "no-unexpected-multiline": ERROR,
      // Allowed a getter without setter, but all setters require getters
      "accessor-pairs": [ ERROR, {
          "getWithoutSet": false,
          "setWithoutGet": true
      }],
      "block-scoped-var": WARN,
      "consistent-return": ERROR,
      "curly": ERROR,
      "default-case": WARN,
      // the dot goes with the property when doing multiline
      "dot-location": [ WARN, "property" ],
      // Produce warnings when something is commented as TODO or FIXME
      "no-warning-comments": [ WARN, {
          "terms": [ "TODO", "FIXME" ],
          "location": "start"
      }],

      "object-shorthand": [ WARN, "never" ],
      "prefer-arrow-callback": WARN,
      "prefer-spread": WARN,
      "prefer-template": WARN,
      // Stylistic - everything here is a warning because of style.
      "array-bracket-spacing": [ WARN, "always" ],
      "block-spacing": [ WARN, "always" ],
      "brace-style": [ WARN, "1tbs", { "allowSingleLine": false } ],
      "camelcase": WARN,
      "comma-spacing": [ WARN, { "before": false, "after": true } ],
      "comma-style": [ WARN, "last" ],
      "func-names": WARN,
      "indent": [ WARN, 4 ],
      "max-depth": [ WARN, 8 ],
      "max-len": [ WARN, 132 ],
      "max-nested-callbacks": [ WARN, 8 ],
      "max-params": [ WARN, 8 ],
      "quote-props": [ WARN, "consistent-as-needed" ],
      "quotes": [ WARN, "single" ],
      "semi-spacing": [ WARN, { "before": false, "after": true }],
      "semi": [ ERROR, "always" ],
      "sort-vars": OFF,
      "space-before-blocks": [ WARN, "always" ],
      "space-before-function-paren": [ WARN, "never" ],
      // "no-console": [ ERROR, { "allow": ["warn", "error"] } ],
    }
}