var Q = require('q');
var aws = require('aws-sdk');

var S3 = new aws.S3();

module.exports = function(options) {
  var def = Q.defer();
  if (!options) {
    def.reject(new Error("expected options object with Bucket and Prefix. No options object"));
  } else if (!options.Bucket) {
    def.reject(new Error("expected options object with Bucket and Prefix. No options.Bucket"));
  } else if (!options.Prefix) {
    def.reject(new Error("expected options object with Bucket and Prefix. No options.Bucket"));
  } else {

    S3.listObjects({
      Bucket: options.Bucket,
      Prefix: options.Prefix
    }, function(err, data) {
      if (err) {
        def.reject(err);
      } else {

        var keys = data.Contents.map(function(object) {
          if (options.pattern) {
            if (options.pattern.test(object.Key)) {
              //TODO: pull in lambduh-validate api?
              return object.Key;
            }
          } else {
            return object.Key;
          }
        });
        keys = keys.filter(function(v) { return v; });

        def.resolve(keys);
      }
    });

  }

  return def.promise;
}

