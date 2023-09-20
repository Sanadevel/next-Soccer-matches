module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/football",
        destination: "https://api.football-data.org/v4/competitions/PL/teams",
      },
      {
        source: "/api/matches/:path",
        destination: `https://api.football-data.org/v4/teams/:path/matches/`,
      },
    ];
  },
};
