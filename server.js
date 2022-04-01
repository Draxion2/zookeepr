const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require("fs");
const path = require("path");
const express = require ("express");
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const { animals } = require("./data/animals.json");
const req = require("express/lib/request");
const res = require("express/lib/response");
const exp = require('constants');
app.use(express.static("public"));

// no code below this!
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});