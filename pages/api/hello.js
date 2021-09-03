// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const sub_domain = req.headers.host[0].split(".")[0];

  const base_path = "https://leaderboard.hackclub.com/club";

  let path;

  switch (sub_domain) {
  }

  res.status(200).json({ host: sub_domain, name: "John Doe" });
};
