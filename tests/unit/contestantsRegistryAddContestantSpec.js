describe('Service: contestantsRegistry#addContestant', function () {
  beforeEach(module('brackets'));
  var service;

  beforeEach(inject(function (_contestantsRegistry_) {
    service = _contestantsRegistry_;
  }));

  it('should not allow duplicates', function() {
    service.addContestant('Joe');
    expect(function() { service.addContestant('Joe') }).toThrowError();
  });

  it('should not add null', function() {
    service.addContestant(null);
    expect(service.getContestants()).toEqual([]);
  });

  it('should not add empty string', function() {
    service.addContestant('');
    expect(service.getContestants()).toEqual([]);
  });

  it('should not add undefined', function() {
    service.addContestant(undefined);
    expect(service.getContestants()).toEqual([]);
  });

  it('should add one contestant', function() {
    service.addContestant('Joe');
    expect(service.getContestants()).toEqual(['Joe']);
  });

  it('should add several contestants', function() {
    service.addContestant('Joe');
    service.addContestant('Sally');
    service.addContestant('Bob');
    expect(service.getContestants()).toEqual(['Joe', 'Sally', 'Bob']);
  });
});
