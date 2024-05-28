const { expect } = require('chai');
describe ('Get object' , () => {
    const supertest = require('supertest');

    it('succes get object' , async () => {
        const response = await supertest('https://api.restful-api.dev/').get('/objects/7')
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body.name).equal('Apple MacBook Pro 16')

    })

})
