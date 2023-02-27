const crypto = require('crypto');
const fs = require('fs');

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  fs.writeFileSync('hash.txt', `${salt}:${hashedPassword}`);
}
hashPassword('secret_password');