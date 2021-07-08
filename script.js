/*
design by Amit Pandey.
design: http://webview.rf.gd/
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/Amitpandey88/music
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Agar tum saath ho",
          artist: "Alka Yagnik and Arijit Singh",
          cover: "data:image/jpeg;base64,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",
          source: "https://github.com/Amitpandey88/music/raw/main/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Everybody Knows",
          artist: "Leonard Cohen",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "Extreme Ways",
          artist: "Moby",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "Butterflies",
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "The Final Victory",
          artist: "Haggard",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "Genius ft. Sia, Diplo, Labrinth",
          artist: "LSD",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "The Comeback Kid",
          artist: "Lindi Ortega",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "Overdose",
          artist: "Grandson",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Rag'n'Bone Man",
          artist: "Human",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
