chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'main.html',
    {
      id: 'mainWindow',
      bounds: {width: 480, height: 420}
    }
  );
});
