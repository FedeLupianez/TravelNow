const audio = document.getElementById("audio");
const mute_button = document.getElementById("mute_volume");
const icon = document.getElementById("volume_icon");
audio.volume = 0.2

mute_button.addEventListener("click", () => {
   if (audio.volume > 0) {
      audio.volume = 0;
      icon.innerHTML = "volume_off";
   } else {
      audio.volume = 0.2;
      icon.innerHTML = "volume_up";
   }
})
