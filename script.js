// Global variables
const songList = [
  { title: 'Boba Tunnel', src: 'song1.mp3' },
  { title: 'Pret Kotha 1.0', src: 'song2.mp3' },
  { title: 'Alpha Akki', src: 'song3.mp3' }
];
let currentSongIndex = 0;
let isPlaying = false;

// Function to play a song
function playSong(songIndex) {
  const audioPlayer = document.getElementById('audio-player');
  const songInfo = document.getElementById('song-info');
  const songTitle = document.getElementById('song-title');
  const albumArt = document.getElementById('album-art');
  const playBtn = document.getElementById('play-btn');

  // Update the source of the audio player
  audioPlayer.src = songList[songIndex].src;

  // Update song title and album art
  songTitle.textContent = songList[songIndex].title;

  // Play the song
  audioPlayer.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';

  // Update the current song index
  currentSongIndex = songIndex;
}

// Function to play the next song
function playNextSong() {
  let nextSongIndex = currentSongIndex + 1;
  if (nextSongIndex >= songList.length) {
    nextSongIndex = 0; // Start from the beginning of the song list
  }
  playSong(nextSongIndex);
}

// Function to play the previous song
function playPreviousSong() {
  let prevSongIndex = currentSongIndex - 1;
  if (prevSongIndex < 0) {
    prevSongIndex = songList.length - 1; // Go to the end of the song list
  }
  playSong(prevSongIndex);
}

// Function to toggle play/pause state
function togglePlay() {
  const audioPlayer = document.getElementById('audio-player');
  const playBtn = document.getElementById('play-btn');

  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audioPlayer.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to song list items
  const songItems = document.getElementsByClassName('song-item');
  for (let i = 0; i < songItems.length; i++) {
    songItems[i].addEventListener('click', function() {
      playSong(i);
    });
  }

  // Add click event listener to play/pause button
  const playBtn = document.getElementById('play-btn');
  playBtn.addEventListener('click', togglePlay);

  // Add click event listener to next button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', playNextSong);

  // Add click event listener to previous button
  const prevBtn = document.getElementById('prev-btn');
  prevBtn.addEventListener('click', playPreviousSong);

  // Add ended event listener to play next song when current song ends
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.addEventListener('ended', playNextSong);
});
