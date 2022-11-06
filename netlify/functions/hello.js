// import fetch from "node-fetch";
// import querystring from "querystring";

// // const querystring = require("querystring");
// // const fetch = require("node-fetch");

// const client_id = process.env.SPOTIFY_CLIENT_ID;
// const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// const getAccessToken = async () => {
//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${basic}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: querystring.stringify({
//       grant_type: "refresh_token",
//       refresh_token,
//     }),
//   });

//   return response.json();
// };

export const handler = async function (event, context) {
  // const accessToken = await getAccessToken();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "helloWorld" }),
  };
};
