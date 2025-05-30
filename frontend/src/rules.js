const rules = {
	user: {
		static: [
			"campaigns:view",
			"campaigns:create",
			"campaigns:edit",
			"campaigns:delete"
		],
	},

	admin: {
		static: [
			"dashboard:view",
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
			"connections-page:actionButtons",
			"connections-page:addConnection",
			"connections-page:editOrDeleteConnection",
			"campaigns:create",
			"campaigns:edit",
			"campaigns:delete"
		],
	},
};

export default rules;
