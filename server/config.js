/**
 * Created by sfall on 16/07/2017.
 */
// server/config.js

//mongodb://saloum:Lag1307!@ds151662.mlab.com:51662/?authSource=gp-angel

module.exports = {
  AUTH0_DOMAIN: 'saloumfall.eu.auth0.com',
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/v2/',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://saloum:Lag1307!@ds151662.mlab.com:51662/gp-angel',
  NAMESPACE: 'http://gp-angel/roles'
};
