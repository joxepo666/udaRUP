
define(['marionette',
        'templates'], function(Marionette, App){

    var FooterView = Marionette.LayoutView.extend({
        template: App.Templates.demo.app.shared.footer.footerJQueryUITemplate
    });

    return FooterView;

});
