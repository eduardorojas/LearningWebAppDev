var main = function () {
    "use strict";

    
    var $username, $name, $location, $description, $followers, $timezone, $rank, $profile;
    var $twitterinfo;
    $.ajax({
        url: 'http://api.twittercounter.com/?apikey=4ac456c5f8bde295f068752ca3a4650c&twitter_id=23012194&output=jsonp',
        data: {
            format: 'jsonp'
        },
        dataType: 'jsonp',
        success: function(data){
            
            console.log(data);
            $username = $("<li>User Name: " + data.username + "</li>");
            $name = $("<li>Name: " + data.name + "</li>");
            $location = $("<li>Location: " + data.location + "</li>");
            $description = $("<li>Description: " + data.description + "</li>");
            $followers = $("<li>Followers: " + data.followers_current + "</li>");
            $timezone = $("<li>Timezone: " + data.timezone + "</li>");
            $rank = $("<li>Rank: " + data.rank + "</li>");
            $profile = $("<li><a href=" + data.avatar +">Profile Pic</a></li>")

            $twitterinfo = $("<ul>").append($username,$name,$location,$description,$followers,$timezone,$rank,$profile);
            $("body").append($twitterinfo);
        },

        type: 'Get'
    });
    

};

$(document).ready(main);