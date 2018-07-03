var app = angular.module("brackets", ["ngRoute"]);

intdiv = function(numerator, denominator) {
    var result = numerator / denominator;
    if (result >= 0) {
        return Math.floor(result);
    } else {
        return Math.ceil(result);
    }
}

app.config(function($routeProvider) {
  $routeProvider
  .when("/tournament", {
    templateUrl : "tournament.html",
    controller : "tournamentController",
    controllerAs : "ctrl"
  })
  .when("/registration", {
    templateUrl : "registration.html",
    controller : "registrationController",
    controllerAs : "ctrl"
  })
  .otherwise({
      templateUrl : "hello.html"
  });
});

app.controller("registrationController", function(contestantsRegistry) {
    this.contestants = [];
    this.error = '';

    var myError = this.error;
    this.createRoster = function() {
      contestantsRegistry.clearRoster();
      this.error = '';
      if (![2,4,8].includes(this.contestants.length)) {
        this.error = "Must seed bracket with either 2, 4, or 8 players";
      }
      try {
        this.contestants.forEach(function(player) {
          contestantsRegistry.addContestant(player);
        });
      } catch(err) {
        this.error = "Duplicate name(s) not allowed";
      }
    };
});

app.controller("tournamentController", function(contestantsRegistry) {
    var reg = contestantsRegistry;
    this.bracket = reg.buildBracket(reg.getContestants());
    this.players = [];
    this.winner = null;
    this.round = 1;

    this.isTournamentComplete = function() {
      if (this.winner) {
        return true;
      } else {
        return false;
      }
    }

    this.allMatchesHaveWinner = function() {
      for (i = 0; i < this.players.length; i++) {
        if (!this.players[i]) {
          return false;
        }
      }
      return this.bracket.length == this.players.length;
    }

    this.completeThisRound = function() {
      this.error = '';

      if (this.players.length == 1) {
        this.winner = this.players[0];
        return;
      }

      if (!this.allMatchesHaveWinner()) {
        this.error = "Please select a winner for every match."
        return;
      }

      this.round++;
      this.bracket = reg.buildBracket(this.players);
      this.players = [];
    };
});

app.factory('contestantsRegistry', function() {
    var contestants = [];
    return {
      buildBracket: function(players) {
          var bracket = [];
          for (i = 0; i < players.length; i += 2) {
              bracket[intdiv(i, 2)] = [
                players[i],
                players[i + 1] || ''
              ];
          }
          return bracket;
      },

      getContestants: function() { return contestants; },

      clearRoster: function() { contestants = []; },

      addContestant: function(contestant) {
          if (!contestant) {
              return; // do nothing
          }

          if (contestants.includes(contestant)) {
            throw new Error("Duplicate contestant");
          }
          contestants.push(String(contestant));
      }
    }
});
