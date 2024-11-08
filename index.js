const express = require('express');
const path = require('node:path');
const app = express();

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// executor android
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'executor-android.html'));
  });

// executor ios
app.get('/executor-ios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'executor-ios.html'));
  });

// executor pc
app.get('/executor-pc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'executor-pc.html'));
  });

// Menentukan port server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
