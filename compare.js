const crypto = require('crypto');
const fs = require('fs');

function comparePassword(password) {
  // Отримуємо сіль та хешований пароль з файлу
  const data = fs.readFileSync('password.txt', 'utf-8');
  const [salt, hashedPassword] = data.split(':');

  // Хешуємо введений пароль з використанням солі
  const inputHashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

  // Порівнюємо отриманий хеш з хешем у файлі
  if (inputHashedPassword === hashedPassword) {
    console.log('Пароль вірний');
    return true;
  } else {
    console.log('Пароль невірний');
    return false;
  }
}

// Приклад використання
comparePassword('secret_password');