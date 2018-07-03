describe('tournamentController#completeThisRound', function() {
  beforeEach(module('brackets'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('tournamentController');
  }));

  it('should declare only player the winner', function() {
    ctrl.players = [ 'Joe' ];
    ctrl.bracket = [];
    ctrl.completeThisRound();
    expect(ctrl.winner).toEqual('Joe');
    expect(ctrl.isTournamentComplete()).toBeTruthy();
    expect(ctrl.round).toEqual(1);
  });

  it('should create a new bracket from 2 players', function() {
    ctrl.bracket = [['Joe', 'Brad'], ['Cindy', 'Sally']]
    ctrl.players = [ 'Joe', 'Sally' ];
    ctrl.completeThisRound();
    expect(ctrl.bracket).toEqual([['Joe', 'Sally']]);
    expect(ctrl.isTournamentComplete()).toBeFalsy();
    expect(ctrl.round).toEqual(2);
  });

  it('should create a new bracket from an even number of players', function() {
    ctrl.bracket = [['Joe', 'Brad'], ['Sally', 'Mae'], ['John', 'Bob'], ['Mary', 'Cindy']];
    ctrl.players = [ 'Joe', 'Sally', 'Bob', 'Cindy' ];
    ctrl.completeThisRound();
    expect(ctrl.bracket).toEqual([['Joe', 'Sally'], ['Bob', 'Cindy']]);
    expect(ctrl.isTournamentComplete()).toBeFalsy();
    expect(ctrl.round).toEqual(2);
  });
});
