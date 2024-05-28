const supertest = require('supertest')
const { baseURLTugas } = require('../globalVariable')

const registerUser = () => supertest(baseURLTugas)
    .post('/users')
    .send({
            "firstName": "Test",
            "lastName": "User",
            "email": "cha4@fakedewi.com",
            "password": "myPassword"
        })

const login = () => supertest(baseURLTugas)
    .post('/users/login')
    .send({
            "email": "cha@fakedewi.com",
            "password": "myPassword"
        })


const getUserProfile = (token) => supertest(baseURLTugas)
    .get('/users/me')
    .set('Authorization', 'Bearer ' + token)



const addContact = (token) => supertest(baseURLTugas)
    .post('/contacts/')
    .send({
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
    .set('Authorization', 'Bearer ' + token)
    
const getContactList = (token)  => supertest(baseURLTugas)
    .get('/contacts')
    .set('Authorization', 'Bearer ' + token)
     
    
const getContactById = (token, id)  => supertest(baseURLTugas)
    .get('/contacts/' + id)
    .set('Authorization', 'Bearer ' + token)

const updateContact= (token, id)  => supertest(baseURLTugas)
    .put('/contacts/' + id)
    .send ({
        "firstName": "Amy",
        "lastName": "Miller",
        "birthdate": "1992-02-02",
        "email": "amiller@fake.com",
        "phone": "8005554242",
        "street1": "13 School St.",
        "street2": "Apt. 5",
        "city": "Washington",
        "stateProvince": "QC",
        "postalCode": "A1A1A1",
        "country": "Canada"
    })
    .set('Authorization', 'Bearer ' + token)



    
    


module.exports = { registerUser, getUserProfile, login, addContact, getContactList, getContactById, updateContact}