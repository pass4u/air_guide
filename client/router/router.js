FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "main"});
    }
});