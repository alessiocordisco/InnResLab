(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"history":{},"name":"Player1005","textToSpeechConfig":{"rate":1,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1},"locales":{"it":"locale/it.txt"},"defaultLocale":"it"},"defaultMenu":["fullscreen","mute","rotation"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","watermark":false,"layout":"absolute","scrollBarColor":"#000000","propagateClick":false,"width":"100%","scrollBarMargin":2,"backgroundColorRatios":[0],"class":"Player","scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoBack":TDV.Tour.Script.historyGoBack,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"unregisterKey":TDV.Tour.Script.unregisterKey,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getKey":TDV.Tour.Script.getKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizStart":TDV.Tour.Script.quizStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showWindow":TDV.Tour.Script.showWindow,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByName":TDV.Tour.Script.getMediaByName,"init":TDV.Tour.Script.init,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"createTween":TDV.Tour.Script.createTween,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"textToSpeech":TDV.Tour.Script.textToSpeech,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"startMeasurement":TDV.Tour.Script.startMeasurement,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"clone":TDV.Tour.Script.clone,"playAudioList":TDV.Tour.Script.playAudioList,"initAnalytics":TDV.Tour.Script.initAnalytics,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"translate":TDV.Tour.Script.translate,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"mixObject":TDV.Tour.Script.mixObject,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"isPanorama":TDV.Tour.Script.isPanorama,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"openLink":TDV.Tour.Script.openLink,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"downloadFile":TDV.Tour.Script.downloadFile,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"registerKey":TDV.Tour.Script.registerKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot},"gap":10,"children":["this.MainViewer"],"height":"100%","minHeight":0,"hash": "b83ad5c07c0db288f8d65ed805e2fcd2dbef34f4a49a8c045f70b0402cdeab41", "definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_camera","class":"PanoramaCamera","initialSequence":"this.sequence_823B1A18_8EFF_7A15_41CB_0B3C942251EC","enterPointingToHorizon":true},{"id":"panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532","label":trans('panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_t.jpg","hfov":360,"data":{"label":"R0010777_20230112122447"},"adjacentPanoramas":[{"panorama":"this.panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1","class":"AdjacentPanorama","distance":25.15,"backwardYaw":107.73,"yaw":-145.11,"data":{"overlayID":"overlay_81F94D9C_8EFD_FE0D_41D1_860A32929530"},"select":"this.overlay_81F94D9C_8EFD_FE0D_41D1_860A32929530.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":2560,"class":"TiledImageResourceLevel","rowCount":5,"colCount":30,"url":"media/panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_0/{face}/0/{row}_{column}.jpg","width":15360},{"tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3,"colCount":18,"url":"media/panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_0/{face}/1/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"url":"media/panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_0/{face}/2/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_0/{face}/3/{row}_{column}.jpg","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_t.jpg"}],"overlays":["this.overlay_81F94D9C_8EFD_FE0D_41D1_860A32929530"],"vfov":180,"hfovMin":"135%"},{"id":"panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1","label":trans('panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_t.jpg","hfov":360,"data":{"label":"R0010727_20230112115618"},"adjacentPanoramas":[{"panorama":"this.panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532","class":"AdjacentPanorama","distance":32.42,"backwardYaw":-145.11,"yaw":107.73,"data":{"overlayID":"overlay_81C98D98_8EFD_FE15_4189_F87238DA7988"},"select":"this.overlay_81C98D98_8EFD_FE15_4189_F87238DA7988.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":2560,"class":"TiledImageResourceLevel","rowCount":5,"colCount":30,"url":"media/panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_0/{face}/0/{row}_{column}.jpg","width":15360},{"tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3,"colCount":18,"url":"media/panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_0/{face}/1/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"url":"media/panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_0/{face}/2/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_0/{face}/3/{row}_{column}.jpg","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_t.jpg"}],"overlays":["this.overlay_81C98D98_8EFD_FE15_4189_F87238DA7988"],"vfov":180,"hfovMin":"135%"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_camera","class":"PanoramaCamera","initialSequence":"this.sequence_82272A19_8EFF_7A17_41E1_CB2AD386F57A","enterPointingToHorizon":true},{"id":"MainViewer","subtitlesBackgroundColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesTop":0,"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBackgroundColor":["#000000"],"playbackBarBorderRadius":0,"data":{"name":"Main Viewer"},"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressBottom":10,"playbackBarLeft":0,"toolTipBorderColor":"#767676","playbackBarHeadHeight":15,"playbackBarHeadBorderColor":"#000000","width":"100%","progressBorderRadius":2,"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderSize":0,"progressLeft":"33%","progressHeight":2,"progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"height":"100%","playbackBarHeadShadow":true,"minWidth":100,"minHeight":50,"progressRight":"33%","subtitlesFontSize":"3vmin","vrPointerSelectionColor":"#FF6600","progressOpacity":0.7,"progressBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderRadius":2,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"toolTipShadowColor":"#333138","toolTipFontColor":"#606060","progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesGap":0,"firstTransitionDuration":0,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"toolTipPaddingBottom":4,"playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","propagateClick":false,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","playbackBarProgressBorderRadius":0,"class":"ViewerArea","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF"},{"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate"},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1_camera","media":"this.panorama_80972DF8_8EFF_BE15_41D3_FD560AAECFF1","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532_camera","media":"this.panorama_8231AE80_8EFF_9AF5_41AA_76AF78F26532","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"id":"sequence_823B1A18_8EFF_7A15_41CB_0B3C942251EC","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"overlay_81F94D9C_8EFD_FE0D_41D1_860A32929530","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-3.86,"hfov":10.5,"yaw":-145.11,"image":"this.AnimatedImageResource_340032B3_38C1_E2F3_41A6_7F697C02B2AA","vfov":10.5,"data":{"label":"GoToR0010727_20230112115618"},"scaleMode":"fit_inside"}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9E7A2174_8EFD_861D_41D8_ECDC2463501D"],"data":{"label":"GoToR0010727_20230112115618","hasPanoramaAction":true}},{"id":"overlay_81C98D98_8EFD_FE15_4189_F87238DA7988","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-2.99,"hfov":10.5,"yaw":107.73,"image":"this.AnimatedImageResource_3401E2B3_38C1_E2F3_41B5_6F71359A7072","vfov":10.5,"data":{"label":"GoToR0010777_20230112122447"},"scaleMode":"fit_inside"}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_814CDDBF_8EFD_FE0B_41E0_7CD40E79DBE5"],"data":{"label":"GoToR0010777_20230112122447","hasPanoramaAction":true}},{"id":"sequence_82272A19_8EFF_7A17_41E1_CB2AD386F57A","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"AnimatedImageResource_340032B3_38C1_E2F3_41A6_7F697C02B2AA","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"finalFrame":"first","frameDuration":41,"levels":[{"height":1500,"class":"ImageResourceLevel","url":"media/res_9F043E43_8EFC_FA7A_41D3_EF247CC293FF_0.png","width":1000}],"colCount":4},{"id":"HotspotPanoramaOverlayArea_9E7A2174_8EFD_861D_41D8_ECDC2463501D","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_3401E2B3_38C1_E2F3_41B5_6F71359A7072","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"finalFrame":"first","frameDuration":41,"levels":[{"height":1500,"class":"ImageResourceLevel","url":"media/res_9F043E43_8EFC_FA7A_41D3_EF247CC293FF_0.png","width":1000}],"colCount":4},{"id":"HotspotPanoramaOverlayArea_814CDDBF_8EFD_FE0B_41E0_7CD40E79DBE5","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"}],"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Thu May 2 2024