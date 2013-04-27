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
	
	Template.genre.events({
		'click div.genre' : function () {
			Session.set("genre", this._id);
			var genre = Genres.findOne({_id:Session.get("genre")});
			var keyword = genre.genre;
			Session.set("keyword", keyword);
		}
	});

	Template.keyword.item= function () {
		return Movies.find({genres:Session.get("keyword")}).fetch();
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
