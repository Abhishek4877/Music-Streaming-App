// Mock data for playlist
const playlistData = [
    { title: 'Shape of you', artist: 'Ed Sheeran', src: 'Shape-of-You---Ed-Sheeran(musicdownload.cc).mp3', cover: 'shape of u cover.jpg' },
    { title: 'See You Later', artist: 'Graham', src: 'WhatsApp Audio 2024-02-27 at 20.41.03_4014a834.mp3 ', cover: 'text-see-you-later-on-260nw-309977378.webp' },
    { title: 'Harleys In Hawaii', artist: 'Katy Perry', src: 'harly (u and i).mp3', cover: 'katy_perry___harleys_in_hawaii_by_anhell2005_ddiik8w-fullview.jpg' },
    { title: 'Ora Kannala', artist: 'G.V.Prakash Kumar', src: 'ORA Kannala.mp3', cover: 'Ora Kannala.jpg' },
    { title: 'Mary On a Cross', artist: 'Ghost', src: 'Mary on the cross.mp3', cover: 'Mary on A cross.jpg' },
    // Add more songs as needed
  ];
  
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const volumeControl = document.getElementById('volumeControl');
  const albumCover = document.getElementById('albumCover');
  const songTitle = document.getElementById('songTitle');
  const artist = document.getElementById('artist');
  const playlistItems = document.getElementById('playlistItems');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  
  let currentSongIndex = 0;
  let isPlaying = false;
  
  function updatePlayer() {
    const currentSong = playlistData[currentSongIndex];
    audioPlayer.src = currentSong.src;
    albumCover.src = currentSong.cover;
    songTitle.textContent = currentSong.title;
    artist.textContent = currentSong.artist;
  }
  
  function togglePlayPause() {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseBtn.textContent = 'Play';
    } else {
      audioPlayer.play();
      playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  }
  
  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlistData.length;
    updatePlayer();
    if (isPlaying) {
      audioPlayer.play();
    }
  }
  
  function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlistData.length) % playlistData.length;
    updatePlayer();
    if (isPlaying) {
      audioPlayer.play();
    }
  }
  
  function shufflePlaylist() {
    playlistData.sort(() => Math.random() - 0.5);
    currentSongIndex = 0;
    updatePlayer();
    if (isPlaying) {
      audioPlayer.play();
    }
  }
  
  function repeatPlaylist() {
    // Implement repeat functionality as needed
  }
  
  function searchSongs() {
    // Implement search functionality using an API
  }
  
  playPauseBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', playNext);
  prevBtn.addEventListener('click', playPrev);
  shuffleBtn.addEventListener('click', shufflePlaylist);
  repeatBtn.addEventListener('click', repeatPlaylist);
  volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value / 100;
  });
  searchBtn.addEventListener('click', searchSongs);
  
  // Initialize player with the first song
  updatePlayer();
  