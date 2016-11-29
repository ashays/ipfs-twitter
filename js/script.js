var me = {
  name: "sampleuser",
  following: ["anotheruser17", "someoneelse23", "mickey"]
};

var feedTweets = [
  {user: "anotheruser17", date: "11/23/16 14:23", tweet: "This is another sample tweet #letsgo #wegotthis"},
  {user: "someoneelse23", date: "11/22/16 12:03", tweet: "Favorite time of day! #blessed"},
  {user: "mickey", date: "11/21/16 00:19", tweet: "Sample sample tweet sample sample sample. These can be up to 140 characters?"},
  {user: "anotheruser17", date: "11/20/16 21:23", tweet: "First tweet! #wootwoot"}
];

$(document).ready(function() {
  refreshAndPopulateFeed();
  $('#new-tweet').submit(function(event) {
    event.preventDefault();
    postTweet($(event.target).children('textarea').val());
    refreshAndPopulateFeed();
    $(event.target).children('textarea').val("");
  });
});

// Store tweet somewhere
function postTweet(tweet) {
  var newTweet = {
    user: me.name,
    date: new Date().toJSON().slice(0,10),
    tweet: tweet
  };
  feedTweets.unshift(newTweet);
}

// Returns list of tweets from feed who belong to users on "users" parameter and are posted after "dateFrom"
function exportFeed(users, dateFrom) {
  
}

// 
function importFeed(myProfile, tweets) {

}


// DOM Manipulation Functions

function refreshAndPopulateFeed() {
  $('.feed').empty();
  for (i = 0; i < feedTweets.length; i++) {
    $('.feed').append('<div class="tweet"><span class="tweet-pseudo">@' + feedTweets[i]['user'] + ' </span><span class="tweet-date">' + feedTweets[i]['date'] + '</span><span class="tweet-message">' + feedTweets[i]['tweet'] + '</span></div>');
  }
}