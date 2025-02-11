const secretKey = 'sua-chave-secreta';

export function encryptData(data) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function checkLogin(username, password) {
  // Valores criptografados armazenados
  const storedUsername = 'U2FsdGVkX1/hl7J+R60P6j7DOaobxSe22ciVYQGaf0c=';
  const storedPassword = 'U2FsdGVkX1/t+3y2eYqYEl5NEsD/VmX+rjVXlJs6YDc=';

  // Descriptografar os valores armazenados
  const decryptedStoredUsername = decryptData(storedUsername);
  const decryptedStoredPassword = decryptData(storedPassword);

  // Logs para fins de teste
  console.log('Username fornecido:', username);
  console.log('Password fornecida:', password);
  console.log('Username armazenado (descriptografado):', decryptedStoredUsername);
  console.log('Password armazenada (descriptografada):', decryptedStoredPassword);

  return username === decryptedStoredUsername && password === decryptedStoredPassword;
}