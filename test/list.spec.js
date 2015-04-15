var expect = require('chai').expect;

var list = require('../');

describe('list-s3-objects', function() {
  it('should exist', function() {
    expect(list).to.exist;
  })

  it('should return a promise', function() {
    expect(list().then).to.be.a('function');
  })

  it('should error if no options object', function(done) {
    list().then(function() {
      done(new Error("expected this function to fail"));
    }, function(err) {
      done();
    })
  })

  it('should error if no options.Bucket', function(done) {
    list({}).then(function() {
      done(new Error("expected this function to fail"));
    }, function(err) {
      done();
    })
  })

  it('should error if no options.Prefix', function(done) {
    list({Bucket: 'my-bucket'}).then(function() {
      done(new Error("expected this function to fail"));
    }, function(err) {
      done();
    })
  })

  xit('should have a test that mocks S3', function(done) {
    list({Bucket: 'my-bucket', Prefix: 'events/'}).then(function() {
    }, function(err) {
    })
  })

})
