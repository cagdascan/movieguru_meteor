Movies = new Meteor.Collection("movies");
Genres = new Meteor.Collection("genres");
Lists = new Meteor.Collection("lists");
Action = new Meteor.Collection("action");
Drama = new Meteor.Collection("drama");
History = new Meteor.Collection("history");
Romance = new Meteor.Collection("romance");
Horror = new Meteor.Collection("horror");
Comedy = new Meteor.Collection("comedy");
Family = new Meteor.Collection("family");
Thriller = new Meteor.Collection("thriller");
Fantasy = new Meteor.Collection("fantasy");
Adventure = new Meteor.Collection("adventure");
Scifi = new Meteor.Collection("sci-fi");
Crime = new Meteor.Collection("crime");
Biography = new Meteor.Collection("biography");
Documentary = new Meteor.Collection("documentary");
War = new Meteor.Collection("war");
Musical = new Meteor.Collection("musical");
Music = new Meteor.Collection("music");
Filmnoir = new Meteor.Collection("film-noir");
Sport = new Meteor.Collection("sport");
Mystery = new Meteor.Collection("mystery");
Animation= new Meteor.Collection("animation");
Western = new Meteor.Collection("western");

if (Meteor.isClient) {

	var keyword_limit = 10;

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

	Template.keyword.selected = function () {
			return Session.equals("keyword", this._id) ? "label-success" : '';
	};

	Template.keyword.hovered = function () {
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

	Template.keywords.events({
		'mouseenter #keyword_header' : function () {
			$('#keyword_header').tooltip('show');
		},
		'click i.icon-plus-sign' : function () {
			keyword_limit = keyword_limit + 10;
			Session.set("keyword_limit", keyword_limit);
		},
		'click i.icon-minus-sign' : function () {
			if (keyword_limit > 10) {
				keyword_limit = keyword_limit - 10;
				Session.set("keyword_limit", keyword_limit);
			}
		}
	});

	Template.keyword.events({
		'click div.keyword' : function () {
			Session.set("keyword", this._id);
		},
		'mouseenter div.keyword' :function () {
			Session.set("hover", this._id);
		},
		'mouseleave div.keyword' :function () {
			$('.label-warning').removeClass('label-warning');
		}
	});


	Template.keyword.item= function () {
		if (Session.get("genres") == "Action") 
		{
			Session.set("keyword_limit", keyword_limit);
			return Action.find({}, {limit:Session.get("keyword_limit")}).fetch();
		}
		else if (Session.get("genres") == "Drama")
		{
			Session.set("keyword_limit", keyword_limit);
			return Drama.find({}, {limit:Session.get("keyword_limit")}).fetch();
		}
		else if (Session.get("genres") == "History")
		{
			Session.set("keyword_limit", keyword_limit);
			return History.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Romance"){
			Session.set("keyword_limit", keyword_limit);
			return Romance.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Horror"){
			Session.set("keyword_limit", keyword_limit);
			return Horror.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Comedy"){
			Session.set("keyword_limit", keyword_limit);
			return Comedy.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Family"){
			Session.set("keyword_limit", keyword_limit);
			return Family.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Thriller"){
			Session.set("keyword_limit", keyword_limit);
			return Thriller.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Fantasy"){
			Session.set("keyword_limit", keyword_limit);
			return Fantasy.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Adventure"){
			Session.set("keyword_limit", keyword_limit);
			return Adventure.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Sci-Fi"){
			Session.set("keyword_limit", keyword_limit);
			return Scifi.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Crime"){
			Session.set("keyword_limit", keyword_limit);
			return Crime.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Biography"){
			Session.set("keyword_limit", keyword_limit);
			return Biography.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Documentary"){
			Session.set("keyword_limit", keyword_limit);
			return Documentary.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "War"){
			Session.set("keyword_limit", keyword_limit);
			return War.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Musical"){
			Session.set("keyword_limit", keyword_limit);
			return Musical.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Music"){
			Session.set("keyword_limit", keyword_limit);
			return Music.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Film-Noir"){
			Session.set("keyword_limit", keyword_limit);
			return Filmnoir.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Sport"){
			Session.set("keyword_limit", keyword_limit);
			return Sport.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Mystery"){
			Session.set("keyword_limit", keyword_limit);
			return Mystery.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Animation"){
			Session.set("keyword_limit", keyword_limit);
			return Animation.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
		else if (Session.get("genres") == "Western"){
			Session.set("keyword_limit", keyword_limit);
			return Western.find({}, {limit:Session.get("keyword_limit")}).fetch();
			}
	 };
	
	Template.movie.item = function () {
		return Movies.find({genres:Session.get("genres"), keywords:Session.get("keyword")}, {limit:20}).fetch();
	};

	Template.movie.events({
		'click button.watch_list' : function () {
			Session.set("name", this.name);
			Session.set("pLink", this.pLink);
			Lists.insert({"user":Meteor.userId(), "name":Session.get("name"), "pLink":Session.get("pLink"), "watchlist":true});
		},
		'click button.watched_list' : function () {
			Session.set("name", this.name);
			Session.set("pLink", this.pLink);
			Lists.insert({"user":Meteor.userId(), "name":Session.get("name"), "pLink":Session.get("pLink"), "watchedlist":true});
		}
	});

	Template.watch_list.list= function () {
		return Lists.find({user:Meteor.userId(), watchlist:true}).fetch();
	};
	Template.watched_list.list= function () {
		return Lists.find({user:Meteor.userId(), watchedlist:true}).fetch();
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
