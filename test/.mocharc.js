module.exports = {
    'allow-uncaught': false,
    'async-only': false,
    bail: false,
    color: true,
    delay: false,
    diff: true,
    exit: false, 
    extension: ['js', 'cjs', 'mjs'], 
    package: './package.json',
    parallel: false,
    recursive: false,
    reporter: './node_modules/mocha-multi-reporters',
    'reporter-options': 'configFile=./reporterOptions.json',
    slow: '75',
    spec : ['./specs/*.ts'],
    timeout: '60000',
    ui: 'bdd'
};