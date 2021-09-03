// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.headers);
  res.status(200).json({ host: req.headers.host, name: "John Doe" });
};
