/**
 * Setup the Database URL
 */

// mongodb+srv://<username>:<password>@acme-travel.dj8e35v.mongodb.net/?retryWrites=true&w=majority

const DB_USER = "admin";
const DB_PASSWORD = "admin123";
const DB_NAME = "acme-travel";
const CLUSTER_HOST = "acme-travel.dj8e35v.mongodb.net";

// Setup the DB URI
exports.DB_URI =
  "mongodb+srv://" +
  DB_USER +
  ":" +
  DB_PASSWORD +
  "@" +
  CLUSTER_HOST +
  "/" +
  DB_NAME +
  "?retryWrites=true&w=majority";
