describe('registrationController#addContestant', function() {
  beforeEach(module('brackets'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('registrationController');
  }));

  it('should not allow 0 contestants', function() {
    ctrl.contestants = [];
    expect(function() { ctrl.addContestants(); }).toThrowError();
  });

  it('should should not allow 1 contestant', function() {
      ctrl.contestants = ['Joe'];
      expect(function() { ctrl.addContestants(); }).toThrowError();
  });

  it('should should not allow 7 contestants', function() {
      ctrl.contestants = ['A', 'B', "C", "D", "E", "F", "G"];
      expect(function() { ctrl.addContestants(); }).toThrowError();
  });
});
