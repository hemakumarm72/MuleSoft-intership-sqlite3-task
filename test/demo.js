const data = '{"id":"ef9f7e30-1f1a-11eb-b141-372aa45dc635","email":"hemkumar121223","password":"$2b$10$NgVMMPMkJuNjsifHrojhVOmew3cV85la0Kvhag6fJ.u86zhHch2My","createdAt":"2020-11-05 03:56:51.476 +00:00","updatedAt":"2020-11-05 03:56:51.476 +00:00"}';

console.log(data);
const passwordData = JSON.parse(data);
console.log(passwordData.passwordData);
