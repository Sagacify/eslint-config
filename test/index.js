const { expect } = require('chai');
const { CLIEngine } = require('eslint');
const esConfig = require('../index');

describe('Configuation', () => {
  it('should have correct attributes', () => {
    expect(esConfig.parserOptions).to.be.an('object');
    expect(esConfig.env).to.be.an('object');
    expect(esConfig.rules).to.be.an('object');
  });

  it('should load in eslint', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'index.js'
    });

    const code = 'const main = () => { return \'Hello Wolrd!\'; };\nmain();';
    const result = cli.executeOnText(code);

    expect(result.errorCount).to.equal(0);
  });
});
