(function(exports) {
  'use strict';

  var settings = {
    Model: YouTubeAPIModel,
    PlayerView: YouTubePlayerView,
    PlaylistView: PlaylistPlayerView,
    showSearch: true,
    skipLength: 30,
    controlsHideTime: 3000,
    user: 'DesignCourse',
    devKey: 'AIzaSyDNMMplKKFnAdRII9y_WnvKUK5pWzV-_os',
    showLatestChannel: true,
    channels: [
      {
        type: 'searchterm',
        query: 'angular',
        title: 'Angular Videos'
      },
      {
        type: 'searchterm',
        query: 'css',
        title: 'CSS Videos'
      }
    ],
    displayButtons: false
  };

  exports.app = new App(settings);
})(window);
