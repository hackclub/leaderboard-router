// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const sub_domain = req.headers.host[0].split(".")[0];

  res.status(200).json({ host: req.headers.host, name: "John Doe" });
};
