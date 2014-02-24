// Navigation
App.Router.map(function() {
	
	this.resource('campaigns');
		this.resource('campaign', {path: ':campaign_id'});
	this.resource('assets');
});


// Display campaigns model
App.CampaignsRoute = Ember.Route.extend({
	model: function() {
		return campaigns;
	}
});

// Display campaign model
App.CampaignRoute = Ember.Route.extend({
	model: function(params) {
		return campaigns.findBy('id', params.campaign_id);
	}
});
