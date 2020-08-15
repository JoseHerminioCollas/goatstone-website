const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')

function sendText (req, res) {
    console.log('req', req.route)
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(' - -');
    res.end("Message sent - \n");
}

router.post('/msg', sendText);
router.get('/msg', sendText);

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use('/', router);

app.listen(process.env.PORT || 8080);
