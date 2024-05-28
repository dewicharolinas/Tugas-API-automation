const { expect } = require('chai');
const globalVariable = require('../globalVariable')
const { registerUser, getUserProfile, login, addContact, getContactList, getContactById, updateContact } = require('../api/tugas')


describe ('Tugas End-to-end Contacts' , async() => {
    
    // it('Register / Add User ' , async () => {
    //     const response = await registerUser()
    //     console.log(response.body)
    //     expect(response.status).equal(201)
    //     globalVariable.token = response.body.token
    //     expect(response.body)
    // })
    
    it('Login User ' , async () => {
        const response = await login()
        console.log(response.body)
        expect(response.status).equal(200)
        globalVariable.token = response.body.token
        expect(response.body)
    })

    it('Get User Profile', async () => {
        const response = await getUserProfile(globalVariable.token)
        console.log(response.body)
        expect(response.status).equal(200)
        // globalVariable.token = response.body.token
        expect(response.body)
    })

    it('Add Contact', async () => {
        const response = await addContact(globalVariable.token)
        console.log(response.body)
        expect(response.status).equal(201)
        expect(response.body)
    })

    it('Get Contact List', async () => {
        const response = await getContactList(globalVariable.token)
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('Get Contact By Id', async () => {
        const response = await getContactById(globalVariable.token, '662ceca71ecd8c0013712c3e')
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('Update Contact', async () => {
        const response = await updateContact(globalVariable.token, '662ceca71ecd8c0013712c3e')
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })
})