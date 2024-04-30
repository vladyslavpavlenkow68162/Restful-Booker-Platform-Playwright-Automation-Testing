class MyReporter {
    constructor(options) {
      console.log(`my-awesome-reporter setup with customOption set to ${options.customOption}`);
    }
  
    onBegin(config, suite) {
      console.log(`Starting the run with ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test, result) {
      console.log(`Finished test ${test.title}: ${result.status}`);
    }
  
    onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
    }

    onError(error) {
        console.log(`An error has occured in ${test.title}: ${result.status}`);
    }
  }
  
  module.exports = MyReporter;