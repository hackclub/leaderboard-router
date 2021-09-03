module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/api/route",
        permanent: true,
      },
    ];
  },
};
