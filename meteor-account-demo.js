if (Meteor.isClient) {
	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_ONLY'
	});
	
  Template.hello.greeting = function () {
    return "Welcome to meteor-account-demo.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      var userId = Meteor.userId();
	  console.log('UserID: ' + userId);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
