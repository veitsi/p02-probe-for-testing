var assert = require('assert');
var mit11=require('../main.js');
fs=require('fs');
eval(fs.readFileSync('/home/jsdev/p02/main.js')+'');

 suite('#twins()', function() {
     it('should return double argument', function () {
         assert.equal(twins(3), 6);

     });
     it('should return zero', function(){
         assert.equal(twins(0),0);
     });
  });
suite("#triple", function(){
    it('should return 3', function(){
        assert.equal(triple(1),3);
    });
    it('should return 9',function(){
        assert.equal(triple(3),9);
    })
});
