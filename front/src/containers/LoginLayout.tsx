import React from "react";

const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;

// 対応範囲
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .slice(13)
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const LoginLayout: React.FC = () => {
  return (
    <a href={accessUrl}>Login Button</a>
  )
};

export default LoginLayout;