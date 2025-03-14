document.addEventListener("DOMContentLoaded", function () {
  var videoModal = document.getElementById("videoModal");
  var videoFrame = document.getElementById("video");

  videoModal.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var videoSrc = button.getAttribute("data-src").replace("youtu.be/", "www.youtube.com/embed/").split("?")[0];
      videoFrame.src = videoSrc;
  });

  videoModal.addEventListener("hidden.bs.modal", function () {
      videoFrame.src = "";
  });
});