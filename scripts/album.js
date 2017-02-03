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
 
     var $row = $(template);
    
    var clickHandler = function () {
        var songNumber = $(this).attr('data-song-number');
        
        if (currentlyPlayingSong !== null) {
            var currentlyPlayingCell = $('.song-item-number[data-song-number=" ' + currentlyPlayingSong + ' "]');
            currentlyPlayingCell.html(currentlyPlayingSong);
    }
        
        if(currentlyPlayingSong !== songNumber) {
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSong = songNumber;
        } else if (currentlyPlayingSong === songNumber) {
            $(this).html(playButtonTemplate);
            currentlyPlayingSong = null;
        }
        
    };
    
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');
        
        if(songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };
    
    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');
        
        if(songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
    };
        
    $row.find ('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;
    
 };


    $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);

 var setCurrentAlbum = function(album) {
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
     // #3
     $albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };
 

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
     
 });

var album = [albumPicasso, albumMarconi, albumThePixies];
var index = 1;
albumImage.addEventListener("click", function(event) {
    setCurrentAlbum(album[index]);
    index++;
    if (index == album.length) {
        index = 0;
    }
});
     
     var findParentByClassName = function(element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        +    
 +    if (currentParent) {
 +        while (currentParent.className && currentParent.className != targetClass) {
 +            currentParent = currentParent.parentElement;
 +        }
 +        
 +        if (currentParent.className == targetClass) {
 +            return currentParent;
 +        } else {
 +            alert("No parent with that class name found.");
 +        }
 +    } else {
 +        alert("No parent found.");
        }
         
};


 