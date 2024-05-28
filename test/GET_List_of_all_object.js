const { expect } = require('chai');
const { getlistObjects } = require('../api/object')

describe ('Get List Of All Objects' , () => {
    // const supertest = require('supertest');

    it('Succes Get List Of Objects ' , async () => {
        const response = await getlistObjects ()
        // console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)

    })

})
