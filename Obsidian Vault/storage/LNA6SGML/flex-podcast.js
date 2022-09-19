TWP = window.TWP || {};
TWP.Features = TWP.Features || {};
TWP.Features.Podcast = TWP.Features.Podcast || {};
TWP.Features.Podcast.PoDaLoaded = false;

var base = 'https://audio-api.washpost.arcpublishing.com/api/v1/';

// <------ Do not edit - necessary function to construct AudioPlayer classes
TWP.Features.Podcast.ClassBuilder = {
  _createClass: (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })(),
  _classCallCheck: function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
};
// ----------->

// Beginning of transpiled code
TWP.Features.Podcast.Player = {
  AudioPlayer: (function () {
    function AudioPlayer($container) {
      var _this2 = this;

      TWP.Features.Podcast.ClassBuilder._classCallCheck(this, AudioPlayer);

      this.container = $container;
      this.slug = $container.attr('data-podcast-slug');
      if (this.container.width() < 450) {
        var playShareBar = this.container.find('.play-share-bar');
        playShareBar.addClass('is-part-width');
        this.container.find('.subscribe-call').hide();
      }
      this.isPodcast = $container.attr('data-podcast') == 'true';

      this.progressBarContainer = (function () {
        var progressUI = $container.find('.progress-bar-container');
        progressUI.mousedown(function (ev) {
          ev.preventDefault();
          return _this2.updatePlayHead(ev, _this2);
        });
        return progressUI;
      })();
      this.src = $container.attr('data-soundstream');
      this.playButton = (function () {
        var playButton = $container.find('.play-button-container');
        return playButton;
      })();
      this.playDirective = (function () {
        var playDirective = $container.find('.play-directive');
        return playDirective;
      })();
      this.playShareBar = (function () {
        var playShareContainer = $container.find('.play-share-bar');
        if (playShareContainer.css('text-align') == 'center') {
          playShareContainer.css({ 'margin-left': '-24px' });
        }
        return playShareContainer;
      })();
      this.minimizeButton = (function () {
        var addToButton = $container.find(
          '.inline-subscribe-line.collapsed'
        )[0];
        $(addToButton).on('click', function () {
          _this2.playShareBar.removeClass('more-progress');
          _this2.playShareBar.addClass('less-progress');
        });
        return addToButton;
      })();
      this.audio = (function () {
        var audioElement = document.createElement('audio');
        if (_this2.isPodcast) {
          audioElement.type = 'audio/mp3';
        } else if (!_this2.isPodcast) {
          audioElement.src = _this2.src;
          audioElement.type = 'audio/mp3';
          audioElement.preload = 'metadata';
        }
        audioElement.addEventListener(
          'timeupdate',
          function () {
            return _this2.updateProgressBar();
          },
          true
        );
        audioElement.addEventListener(
          'ended',
          function () {
            return _this2.restartAudio();
          },
          true
        );
        if (_this2.isPodcast == false) {
          audioElement.addEventListener('loadedmetadata', function () {
            var rawTime = audioElement.duration;
            var timeUI = $container.find('.podcast-duration');
            timeUI.text(TWP.Features.Podcast.Player.formatTime(rawTime));
          });
        }
        return audioElement;
      })();
      this.subscribeButtons = (function () {
        var buttonArray = $container.find('.podcast-subscribe-link').toArray();
        for (var button in buttonArray) {
          $(buttonArray[button]).on('click', function () {
            TWP.Features.Podcast.Player.sendSubscribe(
              _this2,
              $(this).attr('id')
            );
          });
        }
      })();
      this.progressBar = (function () {
        var progressBar = _this2.progressBarContainer.find('.progress-bar');
        return progressBar;
      })();
      //   this.bufferBar = this.progressBarContainer.find('.buffer-bar');
      this.timestamp = (function () {
        var timeUI = $container.find('.podcast-duration');
        var rawTime = timeUI.attr('data-duration');
        if (rawTime) {
          timeUI.text(TWP.Features.Podcast.Player.formatTime(rawTime));
        }
        return timeUI;
      })();
      this.ranges = [];
      this.container.append(this.audio);
      this.state = {
        hasPlayed: false,
        sentPause: false,
        quartile: {
          q25: false,
          q50: false,
          q75: false,
          q100: false
        }
      };
      if (this.isPodcast) {
        _this2.podcastId = $container.attr('data-id');
        initAudioDatalayer(_this2);
      }
    }

    TWP.Features.Podcast.ClassBuilder._createClass(AudioPlayer, [
      {
        key: 'play',
        value: function play() {
          if (this.playShareBar.width() < 185) {
            this.playDirective.css({ display: 'none' });
            this.progressBarContainer.css({
              width: 'calc(100% - 70px)',
              left: '8px'
            });
            this.timestamp.css({ left: '16px' });
          }
          this.playButton
            .children('i')
            .removeClass('fa-play play-button')
            .addClass('fa-pause pause-button');
          this.playDirective.text('Pause');
          var isPlaying =
            this.audio.currentTime > 0 &&
            !this.audio.paused &&
            !this.audio.ended &&
            this.audio.readyState > 2;
          this.progressBarContainer.css({ display: 'inline-block' });
          this.playShareBar.addClass('show-progress');
          if (!isPlaying) {
            var loader = this.playButton.find('.loader');
            loader.hide();
            this.audio.play();
          }
          TWP.Features.Podcast.Player.pausePageRefresh(this.slug);
        }
      },
      {
        key: 'pause',
        value: function pause() {
          this.playButton
            .children('i')
            .removeClass('pause-button fa-pause')
            .addClass('fa-play play-button');
          this.playDirective.text('Listen');
          var isPlaying =
            this.audio.currentTime > 0 &&
            !this.audio.paused &&
            !this.audio.ended &&
            this.audio.readyState > 2;
          if (isPlaying) {
            this.audio.pause();
          }
        }
      },
      {
        key: 'updateProgressBar',
        value: function updateProgressBar(override) {
          var playPercentage = override;
          if (!playPercentage) {
            var elapsedTime = Math.round(this.audio.currentTime);
            var elapsedTimeStamp = TWP.Features.Podcast.Player.formatTime(
              this.audio.duration - elapsedTime
            );
            this.timestamp.text(elapsedTimeStamp);
            playPercentage = Math.round(
              (elapsedTime / this.audio.duration) *
              (this.progressBarContainer.width() - 8)
            );
            var checkQuartile = elapsedTime / this.audio.duration;
            TWP.Features.Podcast.Player.findQuartile(this, checkQuartile);
          }
          this.progressBar.css({ width: playPercentage + 14 + 'px' });
        }
      },
      {
        key: 'updatePlayHead',
        value: function updatePlayHead() {
          var _this3 = this;

          var localClick = true;
          var click = true;
          var handlers = {
            mousemove: function mousemove(e) {
              e.preventDefault();
              click = false;
              var offset;
              if (e.target.className == 'podcast-progress-point') {
                offset = e.offsetX + e.target.offsetLeft;
                // Click event establishes the inside span as a target and throws off the math without adding its position to the offset
              } else {
                offset = e.offsetX; // Scrub to the center of the progress bar cursor
              }
              _this3.updateProgressBar(offset);
              _this3.audio.currentTime =
                _this3.audio.duration *
                (offset / _this3.progressBarContainer.width());
            }
          };

          function handleEndDrag(e) {
            e.preventDefault();
            _this3.progressBarContainer.off(handlers);
            //_this3.progressBar.removeClass('notransition');
            if (_this3.state.hasPlayed) {
              if (localClick) {
                if (_this3.state.hasPlayed) {
                  if (click) {
                    if (e.target.className == 'podcast-progress-point') {
                      _this3.updateProgressBar(e.offsetX + e.target.offsetLeft);
                      // Click event establishes the inside span as a target and throws off the math without adding its position to the offset
                      var loadedTime =
                        _this3.audio.duration *
                        ((e.offsetX + e.target.offsetLeft) /
                          _this3.progressBarContainer.width());
                      _this3.progressBarContainer.off(handlers);
                      _this3.audio.currentTime = loadedTime;
                      localClick = false;
                    } else {
                      var playedRange = _this3.audio.played;
                      if (playedRange.length > 0) {
                        _this3.audio.currentTime =
                          _this3.audio.duration *
                          (e.offsetX / _this3.progressBarContainer.width());
                        _this3.progressBarContainer.off(handlers);
                        localClick = false;
                      } else {
                        _this3.updateProgressBar(e.offsetX);
                        _this3.progressBarContainer.off(handlers);
                        var timeDenom =
                          e.offsetX / _this3.progressBarContainer.width();
                        _this3.audio.addEventListener(
                          'loadedmetadata',
                          function () {
                            var loadedTime = _this3.audio.duration * timeDenom;
                            _this3.audio.currentTime = loadedTime;
                            localClick = false;
                            // var loader = _this3.playButton.find('.loader');
                            //  loader.hide();
                          },
                          true
                        );
                      }
                    }
                  }
                }
              }
            }
            $(document).off('mouseup', handleEndDrag);
          }
          $(document).on('mouseup', handleEndDrag);
          this.progressBarContainer.on(handlers);
          _this3.playShareBar.removeClass('less-progress');
          _this3.playShareBar.addClass('more-progress');
        }
      },
      {
        key: 'restartAudio',
        value: function restartAudio() {
          this.audio.currentTime = 0;
          this.pause();
          TWP.Features.Podcast.Player.resumePageRefresh(this.slug);
        }
      },
      {
        key: 'audio',
        get: function get() {
          return this._audio;
        },
        set: function set(newAudio) {
          this._audio = newAudio;
        }
      }
    ]);

    return AudioPlayer;
  })(),
  AudioPlayerContainer: (function () {
    function AudioPlayerContainer() {
      TWP.Features.Podcast.ClassBuilder._classCallCheck(
        this,
        AudioPlayerContainer
      );
      window.addEventListener('resize', function () {
        var poda_players = $('.podcast-play-action').toArray();
        for (var player in poda_players) {
          var curPlayer = $(poda_players[player]);
          var curShareBar = curPlayer.find('.play-share-bar');
          var subscribeCall = curPlayer.find('.subscribe-call');
          var playDirective = curPlayer.find('.play-directive');
          var podcastDuration = curPlayer.find('.podcast-duration');
          var progressBarContainer = curPlayer.find('.progress-bar-container');
          if (curPlayer.width() < 450) {
            curShareBar.addClass('is-part-width');
            subscribeCall.hide();
          } else if (curShareBar.hasClass('is-part-width')) {
            curShareBar.removeClass('is-part-width');
            subscribeCall.show();
          }
          if (curShareBar.width() < 185) {
            if (playDirective != undefined) {
              playDirective.css({ display: 'none' });
            }
            progressBarContainer.css({
              width: 'calc(100% - 70px)',
              left: '8px'
            });
            podcastDuration.css({ left: '16px' });
          } else {
            if (playDirective != undefined) {
              playDirective.css({ display: 'inline-block' });
            }
            if (curShareBar.hasClass('is-part-width')) {
              progressBarContainer.css({
                width: 'calc(100% - 120px)',
                left: '16px'
              });
            } else if (curShareBar.hasClass('less-progress')) {
              progressBarContainer.css({
                width: 'calc(100% - 445px)',
                left: '16px'
              });
            } else {
              progressBarContainer.css({
                width: 'calc(100% - 205px)',
                left: '16px'
              });
            }
            podcastDuration.css({ left: '24px' });
          }
        }
      });
      // let $audioPlayers = $('.play-action');
      this.players = [];
    }

    TWP.Features.Podcast.ClassBuilder._createClass(AudioPlayerContainer, [
      {
        key: 'addPlayer',
        value: function addPlayer(newPlayer) {
          var _this = this;
          var $pushedPlayer = new TWP.Features.Podcast.Player.AudioPlayer(
            $(newPlayer)
          );
          $pushedPlayer.progressBarContainer.on('updatedPlayHead', function (
            ev
          ) {
            return _this.pauseAll(ev);
          });

          $pushedPlayer.playButton.click();

          function playPause() {
            if (!$pushedPlayer.audio.src) {
              $pushedPlayer.audio.src =
                'https://www.podtrac.com/pts/redirect.mp3/' +
                $pushedPlayer.src.substring(
                  $pushedPlayer.src.indexOf('//') + 2,
                  $pushedPlayer.src.length
                );
              $pushedPlayer.audio.type = 'audio/mp3';
            }
            if (window.s && s.sendDataToOmniture && $pushedPlayer.isPodcast) {
              var data = {
                pageName: window.s.pageName,
                eVar1: window.s.pageName,
                eVar8: window.s.eVar8,
                //eVar26: "podsubscribe-" + $pushedPlayer.container.attr("data-series-slug") + "_" + button.target.id,
                eVar61:
                  'podcasts:' +
                  $pushedPlayer.container.attr('data-series-slug') +
                  ':' +
                  $pushedPlayer.container.attr('data-date') +
                  ':' +
                  $pushedPlayer.container
                    .attr('data-podcast-slug')
                    .substring(0, 255),
                prop5: window.s.prop5
              };
            }
            //console.log(data);
            if (!$pushedPlayer.audio.paused) {
              $pushedPlayer.pause();
              if ($pushedPlayer.state.sentPause == false) {
                $pushedPlayer.state.sentPause = true;
              }
              if (window.s && s.sendDataToOmniture && $pushedPlayer.isPodcast) {
                window.sendDataToOmniture(
                  'podcast-pause-playback',
                  'event135',
                  data
                );
                pushGoogleEvent($pushedPlayer.datalayer, 'audio-pause');
              }
            } else if ($pushedPlayer.audio.paused) {
              // Pause everything if something is already playing
              _this.players.forEach(function (player) {
                player.pause();
              });
              $pushedPlayer.play();
              $pushedPlayer.state.hasPlayed = true;
              $pushedPlayer.progressBarContainer.css({ cursor: 'pointer' });
              if (window.s && s.sendDataToOmniture && $pushedPlayer.isPodcast) {
                var event_title = 'podcast-begin-playback';
                var ga_title = 'audio-start';
                var event = 'event130';
                if ($pushedPlayer.state.sentPause) {
                  event_title = 'podcast-unpause-playback';
                  ga_title = 'audio-unpause';

                  event = 'event138';
                }
                window.sendDataToOmniture(event_title, event, data);
                pushGoogleEvent($pushedPlayer.datalayer, ga_title);

              }
            }
          }
          $pushedPlayer.playDirective.click(playPause);
          $pushedPlayer.playButton.click(playPause);
          _this.players.push($pushedPlayer);
        }
      },
      {
        key: 'pauseAll',
        value: function pauseAll() {
          this.players.forEach(function (player) {
            player.pause();
          });
        }
      },
      {
        key: 'players',
        get: function get() {
          return this._players;
        },
        set: function set(playerArray) {
          this._players = playerArray;
        }
      },
      {
        key: 'state',
        get: function get() {
          return this._state;
        },
        set: function set(newState) {
          this._state = newState;
        }
      }
    ]);

    return AudioPlayerContainer;
  })(),

  formatTime: function formatTime(duration) {
    var minutes = Math.floor(duration / 60);
    var seconds =
      Math.ceil(duration % 60) < 10
        ? '0' + Math.ceil(duration % 60).toString()
        : Math.ceil(duration % 60);
    if (seconds == 60) {
      seconds = '00';
      minutes = minutes + 1;
    }
    return minutes + ':' + seconds;
  },

  findQuartile: function findQuartile(podcast, quartile) {
    if (podcast.isPodcast) {
      var q_1 = '25-quartile';
      var q_2 = '50-quartile';
      var q_3 = '75-quartile';
      var q_4 = '100-quartile';
      var event_1 = 'event131';
      var event_2 = 'event132';
      var event_3 = 'event133';
      var event_4 = 'event134';

      if (quartile >= 1) {
        if (!podcast.state.quartile.q100) {
          podcast.state.quartile.q100 = true;
          TWP.Features.Podcast.Player.sendQuartile(podcast, q_4, event_4);
        }
      } else if (quartile >= 0.75) {
        if (!podcast.state.quartile.q75) {
          podcast.state.quartile.q75 = true;
          TWP.Features.Podcast.Player.sendQuartile(podcast, q_3, event_3);
        }
      } else if (quartile >= 0.5) {
        if (!podcast.state.quartile.q50) {
          podcast.state.quartile.q50 = true;
          TWP.Features.Podcast.Player.sendQuartile(podcast, q_2, event_2);
        }
      } else if (quartile >= 0.25) {
        if (!podcast.state.quartile.q25) {
          podcast.state.quartile.q25 = true;
          TWP.Features.Podcast.Player.sendQuartile(podcast, q_1, event_1);
        }
      }
    }
  },
  sendQuartile: function sendQuartile(podcast, quartile, event) {
    if (window.s && s.sendDataToOmniture) {
      var data = {
        pageName: window.s.pageName,
        eVar1: window.s.pageName,
        eVar8: window.s.eVar8,
        //  eVar26: "podsubscribe-" + podcast.container.attr("data-series-slug") + "_" + button.target.id,
        eVar61:
          'podcasts:' +
          podcast.container.attr('data-series-slug') +
          ':' +
          podcast.container.attr('data-date') +
          ':' +
          podcast.container.attr('data-podcast-slug').substring(0, 255),
        prop5: window.s.prop5
      };
      window.sendDataToOmniture(quartile, event, data);
      pushGoogleEvent(podcast.dataLayer, quartile);
    }
  },
  sendSubscribe: function sendSubscribe(podcast, platform) {
    if (window.s && s.sendDataToOmniture) {
      var data = {
        pageName: window.s.pageName,
        eVar1: window.s.pageName,
        eVar8: window.s.eVar8,
        eVar26:
          'podsubscribe-' +
          podcast.container.attr('data-series-slug') +
          '_' +
          platform,
        eVar61:
          'podcasts:' +
          podcast.container.attr('data-series-slug') +
          ':' +
          podcast.container.attr('data-date') +
          ':' +
          podcast.container.attr('data-podcast-slug').substring(0, 255),
        prop5: window.s.prop5
      };
      window.sendDataToOmniture('podcast-subscribe', 'event80', data);
      pushGoogleEvent(podcast.datalayer, 'audio-subscribe', { "avEnrollSource": platform });

    }
  },
  pausePageRefresh: function (slug) {
    if (!!window.TWP && !!TWP.hpRefreshTests) {
      TWP.hpRefreshTests[slug] = function () {
        return false;
      };
    }
  },
  resumePageRefresh: function (slug) {
    if (!!window.TWP && !!TWP.hpRefreshTests) {
      delete TWP.hpRefreshTests[slug];
    }
  }
};


/* Google Analytics Helper Functions */

function getAvName(podcast) {
  return podcast.seriesMeta.seriesSlug + ";podcast;" + podcast.publicationDisplayDate + ";" + podcast.slug;
}

function getAdAttributes(podcast) {
  if (podcast.rhapsochord == null) {
    return "noad";
  }
  else {
    var adAttribute = "";
    if (podcast.rhapsochord.preRoll) {
      adAttribute += "preroll;";
    }
    if (podcast.rhapsochord.postRoll) {
      adAttribute += "postroll;";
    }
    if (podcast.rhapsochord.midRollPoints && podcast.rhapsochord.midRollPoints.length > 0) {
      adAttribute += "midroll";
    }
    return adAttribute;
  }
}

function initAudioDatalayer(audioPlayer) {
  $.ajax({
    type: 'GET',
    url: base + 'audio/' + audioPlayer.podcastId,
    success: function (podcast) {
      var dataLayer = {
        "event": null,
        "action": null,
        "category": "audio",
        "label": "homepage",
        "avName": getAvName(podcast),
        "avProducer": null,
        "avCMS": null,
        "avHost": podcast.seriesMeta.omnitureAuthor,
        "avSection": podcast.seriesMeta.seriesSlug,
        "avSource": "the-washington-post",
        "avPlayer": null,
        "avLength": podcast.audio.duration,
        "avArcID": null,
        "avType": null,
        "avContributors": null,
        "avHostID": null,
        "avContributorID": null,
        "avTags": null,
        "avDesk": null,
        "avPublishDate": podcast.publicationDisplayDate,
        "avKeywords": podcast.keywords,
        "adAttribute": getAdAttributes(podcast),
        "avEnrollSource": null, // gets set on event
      };
      audioPlayer.datalayer = dataLayer;
    }
  });

}

function pushGoogleEvent(datalayer, eventName, additionalProps) {
  if (!window.dataLayer) {
    return;
  };
  var baseLayer = spread({}, datalayer);
  baseLayer.event = eventName;
  baseLayer.action = eventName;
  let completeEvent = spread(baseLayer, additionalProps);
  window.dataLayer.push(completeEvent);
}


function spread(source, target) {
  if (source == undefined) source = {};
  if (target == undefined) target = {};
  var objs = [source, target];
  var comb = objs.reduce(function (r, o) {
    Object.keys(o).forEach(function (k) {
      r[k] = o[k];
    });
    return r;
  });
  return comb;
}

/* End Google Analytics  Helper Functions */
