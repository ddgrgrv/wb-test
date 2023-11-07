document.addEventListener("DOMContentLoaded", function () {
  const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      backend: 'MediaElement'
  });

  const playlist = document.getElementById("playlist");
  const playPauseButton = document.getElementById("play-pause");
  const seekBar = document.getElementById("seek-bar");
  const volumeBar = document.getElementById("volume-bar");
  const currentTime = document.getElementById("current-time");
  const totalDuration = document.getElementById("total-duration");
  const randomButton = document.getElementById("random-button");
  const repeatButton = document.getElementById("repeat-button");

  const audioFiles = [
      { title: "Song 1", path: "./audio/song1.mp3" },
      { title: "Song 2", path: "./audio/song2.mp3" },
      { title: "Song 3", path: "./audio/song3.mp3" },
  ];

  wavesurfer.load(audioFiles[0].path);
  updatePlaylist();

  playPauseButton.addEventListener("click", function () {
      if (wavesurfer.isPlaying()) {
          wavesurfer.pause();
          playPauseButton.textContent = "Play";
      } else {
          wavesurfer.play();
          playPauseButton.textContent = "Pause";
      }
  });

  seekBar.addEventListener("input", function () {
      const progress = parseFloat(seekBar.value) / 100;
      wavesurfer.seekTo(progress);
  });

  volumeBar.addEventListener("input", function () {
      const volume = parseFloat(volumeBar.value);
      wavesurfer.setVolume(volume);
  });

  wavesurfer.on('audioprocess', function () {
      currentTime.textContent = formatTime(wavesurfer.getCurrentTime());
      totalDuration.textContent = formatTime(wavesurfer.getDuration());
      seekBar.value = wavesurfer.getCurrentTime() / wavesurfer.getDuration() * 100;
  });

  playlist.addEventListener("change", function () {
      const selectedIndex = playlist.selectedIndex;
      wavesurfer.load(audioFiles[selectedIndex].path);
  });

  randomButton.addEventListener("click", function () {
      const randomIndex = Math.floor(Math.random() * audioFiles.length);
      playlist.selectedIndex = randomIndex;
      wavesurfer.load(audioFiles[randomIndex].path);
  });

  repeatButton.addEventListener("click", function () {
      wavesurfer.seekTo(0);
  });

  function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function updatePlaylist() {
      audioFiles.forEach(function (audio, index) {
          const option = document.createElement("option");
          option.value = index;
          option.textContent = audio.title;
          playlist.appendChild(option);
      });
  }
});
