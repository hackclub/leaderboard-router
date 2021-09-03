const test = require("tape");
const { create_path } = require("../lib/index");

test.test("testign create_path utility", (t) => {
  t.plan(2);
  t.equal("https://leaderboard.hackclub.com/club/cgc", create_path("cgc"));
  t.equal("https://leaderboard.hackclub.com", create_path("some_other_domain"));
});
