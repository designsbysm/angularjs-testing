require("dotenv")
  .config();

const isDevelopment = () => {
  return process.env.SERVER_ENV === "debug" || process.env.SERVER_ENV === "development";
};

const isProduction = () => {
  return process.env.SERVER_ENV !== "debug" && process.env.SERVER_ENV !== "development";
};

exports.isDev = isDevelopment;
exports.isProd = isProduction;
