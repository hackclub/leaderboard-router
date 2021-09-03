const { path_map } = require("./data");

const generate_path = (path) => `https://leaderboard.hackclub.com/club/${path}`;

const create_path = (sub_domain) => {
  const fallback_path = "https://leaderboard.hackclub.com";

  if (path_map[sub_domain]) return generate_path(path_map[sub_domain]);

  return fallback_path;
};

module.exports = create_path;
