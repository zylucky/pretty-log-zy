// test/index.test.js
const assert = require('assert');
const prettyLog = require('../dist/prettyLog.js');

describe('prettyLog', function() {
  it('should log a message', function() {
    prettyLog.info('这是测试信息!');
    assert.strictEqual(prettyLog, prettyLog);
  });
});