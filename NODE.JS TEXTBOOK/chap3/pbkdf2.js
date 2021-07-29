const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => { //buf에 64바이트 길이의 랜덤 문자열 생성
  const salt = buf.toString("base64"); // 인코딩 'base64'=>인코딩 알고리즘
  console.log("salt:", salt);

  //pbkdf2 => 암호화 알고리즘
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => { //sha512 => 해시알고리즘
    console.log("password:", key.toString("base64"));
  });
});
