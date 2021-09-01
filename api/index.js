const { port } = require('./src/config/index');
const express = require('express');
const { mongoose } = require('./src/config/mongoose');

// Load routes
const { ListRoutes, TaskRoutes } = require('./src/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ROUTE HANDLERS */
/* LIST ROUTES */
app.use('/', ListRoutes);

/* TASK ROUTES */
app.use('/', TaskRoutes);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}. Open http://localhost:${port}/`);
});