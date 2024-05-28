const supertest = require('supertest')
const { baseURL } = require('../globalVariable')

const getlistObjects = () => supertest(baseURL)
    .get('/objects')

const getUSER = () => supertest('https://thinking-tester-contact-list.herokuapp.com/users/me')
    .get('')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')
 
const getUserProfile = () => supertest('https://thinking-tester-contact-list.herokuapp.com/users/me')
    .get('')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')

const AddContact = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts')
    .post('/contactId').send({
        "firstName": "John",
        "lastName": "Doe",
        "birthdate": "1970-01-01",
        "email": "jdoe@fake.com",
        "phone": "8005555555",
        "street1": "1 Main St.",
        "street2": "Apartment A",
        "city": "Anytown",
        "stateProvince": "KS",
        "postalCode": "12345",
        "country": "USA"
    })
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')

const getContact = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts/')
    .get('')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')

const UpdateContact = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts/')
    .put('')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')
 
const getContactList = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts/')
    .get('')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')
 
    const getObjects = () => supertest(baseURL)
    .get('/objects/' + id )


const patchObjects = (id, body) => supertest(baseURL)
    .get('/objects/' + id)
    .send(body)
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjOWQyODFlY2Q4YzAwMTM3MTJiNWEiLCJpYXQiOjE3MTQxOTk4NDh9.wITAzRkGRNfjrIzXKXzT2TN4sR7JIuhxH-bgglIAnAo')

module.exports = {
    getlistObjects ,
    patchObjects,
    getObjects,
    getUSER,
    getUserProfile,
    AddContact,
    getContact,
    getContactList,
    UpdateContact



}