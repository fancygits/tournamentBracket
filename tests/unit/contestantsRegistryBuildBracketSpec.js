describe('Service: contestantsRegistry#buildBracket', function () {
  beforeEach(module('brackets'));
  var service;

  beforeEach(inject(function (_contestantsRegistry_) {
    service = _contestantsRegistry_;
  }));

  it('should have no contestants', function() {
    expect(service.buildBracket([])).toEqual([]);
  });

  it('should have one contestant', function() {
    expect(service.buildBracket(['Joe'])).toEqual([['Joe', '']]);
  });

  it('should have two contestants', function() {
    var players = ['Joe', 'Sally'];
    expect(service.buildBracket(players)).toEqual([['Joe', 'Sally']]);
  });

  it('should have an even number of contestants', function() {
    var players = ['Joe', 'Mary', 'Sally', 'Bob'];
    expect(service.buildBracket(players)).toEqual([ ['Joe', 'Mary'], ['Sally', 'Bob'] ]);
  });

  it('should have an odd number of contestants', function() {
    var players = ['Joe', 'Mary', 'Sally'];
    expect(service.buildBracket(players)).toEqual([ ['Joe', 'Mary'], ['Sally', ''] ]);
  });
});
