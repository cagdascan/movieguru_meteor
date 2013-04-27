Movies = new Meteor.Collection("movies");
Genres = new Meteor.Collection("genres");

if (Meteor.isClient) {

  Template.main.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

	Template.genre.element= function () {
		return Genres.find({}).fetch();
	};
	
	Template.main.events({
		'click div.genre' : function () {
			Session.set("genre", this._id);
			//var keyword = Movies.findOne({genres:Session.get("genre")});
			//console.log(keyword);
			var genre = Genres.findOne({_id:Session.get("genre")});
			var keyword = genre.genre;
			console.log(keyword);
			Template.keyword.element("Action");
		}
	});

	Template.keyword.element= function (keyword) {
		return Movies.find({genres:keyword}).fetch();
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
