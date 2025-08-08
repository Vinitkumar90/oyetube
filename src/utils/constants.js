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

export const SEARCH_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Aanya Kapoor",
    text: "This video explained everything so clearly! I finally understand the topic.",
    replies: [],
  },
  {
    name: "Rajat Mehra",
    text: "Great content. One question though – at 3:45, why did you use that method?",
    replies: [
      {
        name: "Simran Joshi",
        text: "I think it’s because that approach avoids redundancy in the logic.",
        replies: [
          {
            name: "Rajat Mehra",
            text: "Ah makes sense now. Thanks for clarifying!",
            replies: [
              {
                name: "Simran Joshi",
                text: "No problem! Always happy to help 😊",
                replies: [
                  {
                    name: "Dev Arora",
                    text: "This is why I love comment sections like this – people helping each other.",
                    replies: [
                      {
                        name: "Naina Bansal",
                        text: "Absolutely! Sometimes comments are more helpful than the video itself 😂",
                        replies: [
                          {
                            name: "Rajat Mehra",
                            text: "Totally agree, I’ve learned so much here.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Aditya Singh",
        text: "You could also refer to the official docs for more clarity on that method.",
        replies: [
          {
            name: "Rajat Mehra",
            text: "Yes, I checked those too. Pretty helpful.",
            replies: [
              {
                name: "Aditya Singh",
                text: "Glad they helped! The docs have improved a lot lately.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kritika Nair",
    text: "Subscribed! Your content is gold. Keep it up 🙌",
    replies: [],
  },
  {
    name: "Mohit Raina",
    text: "Could you please make a video on React performance optimization?",
    replies: [],
  },
];
