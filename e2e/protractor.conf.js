// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // './src/**/*.e2e-spec.ts',
    './src/test-suites/admin.e2e-spec.ts',
    './src/test-suites/anonymous.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: [
        '--window-size=1920,1080',
        '--disable-web-security',
      ]
    }
  },
  // multiCapabilities: [
  //   {
  //     'browserName': 'chrome',
  //   },
  //   {
  //     'browserName': 'firefox'
  //   }
  // ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },

  onPrepare() {
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './e2e/reports',
      takeScreenShotsOnlyForFailedSpecs: true
    }).getJasmine2Reporter());
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};
