const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$JEFYxTXx5s..GN32dxRLjOj5vzy521Dou7.1/2i.Q0Sng.C96bjgO';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
