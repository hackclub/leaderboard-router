// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const sub_domain = req.headers.host.split(".")[0];

  console.log("sub domain = ", sub_domain);

  let path = "https://leaderboard.hackclub.com";

  res.send({ sub_domain, path });

  //res.redirect(302, path);
};
