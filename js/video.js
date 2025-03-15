document.addEventListener("DOMContentLoaded", function () {
  var videoModal = document.getElementById("videoModal");
  var videoFrame = document.getElementById("videoFrame"); // ID düzəldildi

  videoModal.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var videoSrc = button.getAttribute("data-src");

      // YouTube linkini embed formasına çevirmək
      if (videoSrc.includes("watch?v=")) {
          videoSrc = videoSrc.replace("watch?v=", "embed/");
      } else if (videoSrc.includes("youtu.be/")) {
          videoSrc = videoSrc.replace("youtu.be/", "www.youtube.com/embed/");
      }

      videoFrame.src = videoSrc; // Yeni link iframe-ə yüklənir
  });

  videoModal.addEventListener("hidden.bs.modal", function () {
      videoFrame.src = ""; // Modal bağlananda videonu dayandır
  });
});
