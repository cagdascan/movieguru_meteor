Movies = new Meteor.Collection("movies");
Genres = new Meteor.Collection("genres");
Lists = new Meteor.Collection("lists");

if (Meteor.isClient) {

	Template.genres.events({
		'mouseenter #genre_header' : function () {
			$('#genre_header').tooltip('show');
		}
	});

	Template.genre.element= function () {
		return Genres.find({}).fetch();
	};

	Template.genre.selected = function () {
		return Session.equals("genre", this._id) ? "label-success" : '';
	};

	Template.genre.hovered = function () {
		return Session.equals("hover", this._id) ? "label-warning" : '';
	}
	
	Template.genre.events({
		'click div.genre' : function () {
			Session.set("genre", this._id);
			var array = Genres.findOne({_id:Session.get("genre")});
			var genres= array.genre;
			Session.set("genres", genres);
		},
		'mouseenter div.genre' :function () {
			Session.set("hover", this._id);
		},
		'mouseleave div.genre' :function () {
			$('.label-warning').removeClass('label-warning');
		}
	});

	Template.keyword.item= function () {
		 var array = Movies.find({genres:Session.get("genres")}, {keywords:1, _id:0}, {limit:15}).fetch();
		 return _.flatten(array) && array;
	 };
	
	Template.movie.item = function () {
		return Movies.find({genres:Session.get("genres")}, {limit:15}).fetch();
	};

	Template.movie.events({
		'click button.watch_list' : function () {
			Session.set("list", this._id);
			Lists.insert({"user":Meteor.userId(), "watchlist":Session.get("list")});
		},
		'click button.watched_list' : function () {
			Session.set("list", this._id);
			Lists.insert({"user":Meteor.userId(), "watchedlist":Session.get("list")});
		}
	});

	Template.watch_list.list= function () {
		return Lists.find({user:Meteor.userId()}).fetch();
	};
	Template.watched_list.list= function () {
		return Lists.find({user:Meteor.userId()}).fetch();
	};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
		if (Genres.find().count() == 0) {
			var genres = 
			[
				"Drama",
				"History",
				"Romance",
				"Horror",
				"Comedy",
				"Family",
				"Thriller",
				"Fantasy",
				"Adventure",
				"Action",
				"Sci-Fi",
				"Crime",
				"Biography",
				"Documentary",
				"War",
				"Musical",
				"Music",
				"Film-Noir",
				"Sport",
				"Mystery",
				"Animation",
				"Western",
				"Short",
				"Adult"
			];
			for (var i=0; i<genres.length; i++)
				Genres.insert({genre: genres[i]});
		}
  });
}
