export const buttonListItem = [
  "All",
  "Kapil Sharma",
  "Computer Science",
  "Podcasts",
  "Live",
  "Databases",
  "Electronics",
  "Recently uploaded",
  "New to you",
  "Drama shows",
  "Anime",
];

const YOUTUBE_API_KEY = "AIzaSyAx0MxNqN6rxrqhX1b9siWOW9RdX0Pegt8";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;


  export const SEARCH_URL = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";