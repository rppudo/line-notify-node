const https = require('https');
const qs = require('querystring');

const HOSTNAME = 'notify-api.line.me';
const NOTIFY_API_PATH = '/api/notify';

function LineNotify(token) {
  this.token = token;
}

LineNotify.prototype.sendMessage = (message) => {
  const data = qs.stringify({
    message,
  });

  const req = https.request({
    hostname: HOSTNAME,
    path: NOTIFY_API_PATH,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length,
    },
  });

  req.write(data);
  req.end();
};


module.exports = LineNotify;
module.exports.LineNotify = LineNotify;
