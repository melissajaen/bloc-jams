var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
    { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumThePixies = {
     name: 'Doolittle',
     artist: 'The Pixies',
     label: '4AD',
     year: '1989',
     albumArtUrl: 'assets/images/album_covers/22.png',
     songs: [
         { title: 'Debaser', duration: '2:52' },
         { title: 'Tame', duration: '1:55' },
         { title: 'Wave of Mutilation', duration: '2:04'},
         { title: 'I Bleed', duration: '2:34' },
         { title: 'Here Comes Your Man', duration: '3:21'},
         { title: 'Dead', duration: '2:21' },
         { title: 'Monkey Gone to Heaven', duration: '2:56' },
         { title: 'Mr. Grieves', duration: '2:05'},
         { title: 'Crackity Jones', duration: '1:24' },
         { title: 'La La Love You', duration: '2:43' },
         { title: 'No. 13 Baby', duration: '3:51' },
         { title: 'There Goes My Gun', duration: '1:49' },
         { title: 'Hey', duration: '3:31'},
         { title: 'Silver', duration: '2:25' },
         { title: 'Gouge Away', duration: '2:45' },
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '  <tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber +         '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };


     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

 var setCurrentAlbum = function(album) {
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
var songListContainer = document.getElementsByClassName('album-view-song-list')[0];

var songRows = document.getElementsByClassName('album-view-song-item');


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
      songListContainer.addEventListener('mouseover', function(event) {
         // #1
          if (event.target.parentElement.className === 'album-view-song-item') {
            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
     });
     for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
        // Selects first child element, which is the song-item-number element
        this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');         
         });
     }
 }

var album = [albumPicasso, albumMarconi, albumThePixies];
var index = 1;
albumImage.addEventListener("click", function(event) {
    setCurrentAlbum(album[index]);
    index++;
    if (index == album.length) {
        index = 0;
    }
});
 