const { expect } = require('chai');
const { getUSER, getUserProfile, getContact, UpdateContact } = require('../api/object')
const globalVariable = require('../globalVariable')

describe ('End-to-end Contacts' , () => {
    // const supertest = require('supertest');

    it('Register / Add User ' , async () => {
        const response = await getUSER ()
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable = response.body.token
        expect(response.body)
    })

    it('Login / Get User Profile ' , async () => {
        const response = await getUserProfile()
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable = response.body.token
        expect(response.body)

    })
    it('ADD Contact ' , async () => {
        const response = await getContact ()
        console.log(response.body)
        expect(response.status).equal(201)
        // globalVariable = response.body.token
        expect(response.body)

    })
    it('Get Contact ' , async () => {
        const response = await getContact ()
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable = response.body.token
        expect(response.body)

        

    })  
    
    it('Update Contact ' , async () => {
        const response = await UpdateContact ()
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable = response.body.token
        expect(response.body)

    })

    it('Get Contact List' , async () => {
        const response = await getContact ()
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable = response.body.token
        expect(response.body)

    })

    it('Succes Get list Of Objects ' , async () => {
        const response = await getUSER ()
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable = response.body.token
        expect(response.body)

    })

    

})
