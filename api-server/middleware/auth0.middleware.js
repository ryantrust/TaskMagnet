const { auth } = require("express-oauth2-jwt-bearer");
const dotenv = require("dotenv");
dotenv.config({ path: ".../.env" });

const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.REACT_APP_AUTH0_DOMAIN}`,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
});

module.exports = {
  validateAccessToken,
};
