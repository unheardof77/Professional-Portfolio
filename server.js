const express = require(`express`);
const routes = require(`./routes`);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on http://localhost${PORT}`))