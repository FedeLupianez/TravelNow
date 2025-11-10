const modal = document.getElementById("modal");
const open_button = document.getElementById("open-modal");
const close_button = document.getElementById("close-modal");
const video = document.getElementById("video");

const video_url = "https://www.youtube.com/embed/BSVpBFlg1jg?si=dVFvsCN0JgYOEI6s"

open_button.addEventListener("click", () => {
   modal.style.display = "flex";
   video.src = video_url + "&autoplay=1";
})

const close_modal = () => {
   modal.style.display = "none";
   video.src = "";
}
close_button.addEventListener("click", close_modal);

window.addEventListener("click", (e) => {
   if (e.target === modal) {
      close_modal();
   }
});

