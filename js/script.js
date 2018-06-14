// lang
function setLang(e) {
    var title = Object.keys(e);
    for (var i = 0; i < title.length; i++) {
        $('[text=' + title[i] + ']').html(e[title[i]]);
    };
}

$('.lang').click(function(){
    $(this).toggleClass('zh');
    console.log('OOO');
	if ( $('.lang').hasClass('zh') ) {
		setLang(i18n.zh);
	} else {
		setLang(i18n.en);
	}
})

setLang(i18n.en);

// video

var video = document.getElementById('video');
if(Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://cdn1-venus.qn32.com/lobby/all_2s/playlist.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://cdn1-venus.qn32.com/lobby/all_2s/playlist.m3u8';
    video.addEventListener('loadedmetadata',function() {
        video.play();
    });
}