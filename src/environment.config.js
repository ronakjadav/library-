const ENV = "local";

const ENVIRONMENT_LOCAL = {
  Base_API_URL: "https://dev.api.reservation.theadventus.com/api",
  Base_IMAGE_URL: "https://dev.api.reservation.theadventus.com/",
  Base_SITE_URL: "https://localhost:3000",
};

const ENVIRONMENT_DEVELOPMENT = {
  Base_API_URL: "https://dev.api.reservation.theadventus.com/api",
  Base_IMAGE_URL: "https://dev.api.reservation.theadventus.com/",
  Base_SITE_URL: "https://dev.reservation.theadventus.com",
};

const ENVIRONMENT_PRODUCTION = {
  Base_API_URL: "https://dev.api.reservation.theadventus.com/api",
  Base_IMAGE_URL: "https://dev.api.reservation.theadventus.com/",
  Base_SITE_URL: "https://dev.reservation.theadventus.com",
};

let ENVIRONMENT_VARIABLES;

if (ENV === "local") {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_LOCAL;
} else if (ENV === "development") {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_DEVELOPMENT;
} else {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_PRODUCTION;
}

export default ENVIRONMENT_VARIABLES;
