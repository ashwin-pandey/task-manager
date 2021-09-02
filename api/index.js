const { PORT, FRONT_END_URI } = require('./src/config/index');
const express = require('express');
const { mongoose } = require('./src/config/mongoose');

// Load routes
const { ListRoutes, TaskRoutes } = require('./src/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* CORS HEADER MIDDLEWARE */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `${FRONT_END_URI}`);
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* ROUTE HANDLERS */
/* LIST ROUTES */
app.use('/', ListRoutes);

/* TASK ROUTES */
app.use('/', TaskRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}. Open http://localhost:${PORT}/`);
});