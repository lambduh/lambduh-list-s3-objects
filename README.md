# lambduh-list-s3-objects
Get a list of keys from S3 by Bucket, Prefix, and extension (or custom regex)

```
npm i --save lambduh-list-s3-objects
```

# Usage

```javascript
var list = require('lambduh-list-s3-objects')

list({
  Bucket: 'mybucket', //S3 Bucket
  Prefix: 'events/party/', //Key Prefix
  pattern: /\.png/ // Optional Regex for filtering returned keys
}).then(function(keys) {
  console.log(keys); // Keys from that bucket/prefix/pattern
}, function(err) {
  console.log(err); // some err
});
```

