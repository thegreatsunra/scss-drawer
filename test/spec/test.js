(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        var answer = 42;
        answer.should.equal(42);
      });
    });
  });
})();
