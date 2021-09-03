const { create_path } = require("../../lib/index");

export default (req, res) => {
  const sub_domain = req.headers.host.split(".")[0];

  let path = create_path(sub_domain);
  res.redirect(302, path);
};
