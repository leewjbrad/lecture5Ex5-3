var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    index: 3,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Happier",
        index: 1,
        url: "https://www.youtube.com/embed/iWZmdoY1aTE"
      },
      {
        show: false,
        title: "Happier - Chorus no controls",
        index: 2,
        url: "https://www.youtube.com/embed/iWZmdoY1aTE?controls=0&amp;start=55"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl,
        index: this.index
      };
      this.index += 1;
      this.videos.push(obj);
    },

    deleteVideo: function(videoIndex) {
      console.log("Deleting video");
      let deleteIndex = 0; //will be updated
      for (let video of this.videos) {
        if (video.index === videoIndex) {
          deleteIndex = this.videos.indexOf(video);
        }
      }
      this.videos.splice(deleteIndex, 1);
    }
  }
});
