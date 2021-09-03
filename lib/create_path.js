const generate_path = (path) => `https://leaderboard.hackclub.com/club/${path}`;

const create_path = (sub_domain) => {
  const fallback_path = "https://leaderboard.hackclub.com";

  switch (sub_domain) {
    case "cgc":
      return generate_path("cgc");
    default:
      return fallback_path;
  }
};

module.exports = create_path;
