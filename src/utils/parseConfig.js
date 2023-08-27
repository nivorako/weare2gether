// config/parseConfig.js
import Parse from "parse/dist/parse.min.js";

Parse.initialize(
    process.env.REACT_APP_PARSE_APPLICATION_ID,
    process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
);
Parse.serverURL = process.env.REACT_APP_PARSE_HOST_URL;

export default Parse;
