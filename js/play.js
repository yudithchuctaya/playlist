function Song (title, artist, duration ) {
   this.title = title;
   this.artist = artist;
   this.duration = duration;
   this.isPlaying = false;

   this.play  = function ( ) {
      
   }
   this.stop = function () {
      
   }
   this.toHTML = function() {
      var html = ""; 
      html += this.title + " - ";
      html += this.artist  + " -> ";
      html += this.duration;
      return html;
   }   
}

function Playlist () {
   this.songs = [];
   this.nowPlayingIndex = 0;
   
   this.add = function (song) {
      this.songs.push (song);
   }
   this.play = function () {
       this.songs [  this.nowPlayingIndex ].isPlaying = true;
       
   }
   this.next = function () {     
      this.songs [  this.nowPlayingIndex ].isPlaying = false;
      this.nowPlayingIndex++;
      if (this.nowPlayingIndex == this.songs.length)
         this.nowPlayingIndex = 0;
      this.songs [  this.nowPlayingIndex ].isPlaying = true;
   }
   this.stop = function () {
      this.songs [  this.nowPlayingIndex ].isPlaying = false;
   }
   this.renderInElement  = function(element) {
      var stringHtml = "";
      element.innerHTML = stringHtml;
      for (var i in this.songs) {
         var song = this.songs[i];
         if (song.isPlaying )
             stringHtml += "<li style = 'background-color:yellow'>" +  song.toHTML() +  "</li>";
         else
            stringHtml += "<li>" +  song.toHTML() +  "</li>";
      }
      element.innerHTML = stringHtml;
   }
}

var playlistElement = document.getElementById ("playlist");

var playlist = new Playlist();
playlist.add ( new Song ("title 1", " artist 1", "duration 1")); 
playlist.add ( new Song ("title 1", " artist 1", "duration 1")); playlist.add ( new Song ("title 1", " artist 1", "duration 1")); playlist.add ( new Song ("title 1", " artist 1", "duration 1")); 

playlist.renderInElement (playlistElement); 

var playButton = document.getElementById ("play");
playButton.onclick = function () {
   
   playlist.play ();
  playlist.renderInElement (playlistElement); 

};

var nextButton = document.getElementById ("next");
nextButton.onclick = function () {
     playlist.next ();
   playlist.renderInElement (playlistElement); 

};

var stopButton = document.getElementById ("stop");
stopButton.onclick = function () {
     playlist.stop ();
   playlist.renderInElement (playlistElement); 

};