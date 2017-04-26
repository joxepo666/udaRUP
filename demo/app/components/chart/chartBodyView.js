define(['marionette',
        'templates',
        'rup/rup.chart'], function(Marionette, App){

  var ChartBodyView = Marionette.LayoutView.extend({
      template: App.Templates.demo.app.components.chart.chartBodyTemplate
  });

  return ChartBodyView;
});
