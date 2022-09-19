;(function () {
  window.serviceCallbacks.push(function() {
    window.services.trayService = new services.TrayService();
    new window.services.AppBarService();
  })
})();

;(function () {
  window.serviceCallbacks.push(function() {
    const BreakingNewsService = new services.BreakingNewsService();
  })
})();

;(function () {
  window.serviceCallbacks.push(function() {
    const WeatherAlertService = new services.WeatherAlertService();
  })
})();
