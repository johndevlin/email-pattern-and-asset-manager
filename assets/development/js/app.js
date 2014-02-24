App = Ember.Application.create();



// Add a campaign
App.CampaignsController = Ember.ObjectController.extend({
	isAdding: false,

	actions: {
		add: function() {
			this.set('isAdding', true);
		},

		doneAdding: function() {
			this.set('isAdding', false);
		}
	}
});

// Edit a campaign
App.CampaignController = Ember.ObjectController.extend({
	isEditing: false,

	actions: {
		edit: function() {
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});