module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
    },
    globals: {

        "ui": true,

        "window": true,
        "document": true,

        "Event": true,
        "navigator": true,

        "module": true,
        "NodeList": true,
        "Image": true,

        "setInterval": true,
        "clearInterval": true,
        "setTimeout": true,
        "clearTimeout": true,

        "atob": true,
        "Blob": true,
        "Uint8Array": true,
        "confirm": true,
        "performance": true,

        "XMLHttpRequest": true,
        "FileReader": true,
        "FormData": true,
        "sessionStorage": true,

        "alert": true,
        "console": true

    },
    rules: { // https://eslint.org/docs/rules/

        "array-bracket-spacing": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "constructor-super": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "object-curly-spacing": ["off", "never"],
        "require-yield": "error",
        "strict": "error",
        "use-isnan": "error",
        "valid-typeof": "error",

        "no-case-declarations": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "error"

    }
};