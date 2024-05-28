const { expect } = require('chai');
const { patchObjects, getObjects } = require('../api/object')
const testData = require('../test.data/patch_object.json')

describe ('Patch List Of All Objects' , () => {
    // const supertest = require('supertest');

    it('Succes Patch Of Objects ' , async () => {
         
        const getResponse = await getObjects (
            'ff808181eeb2234018ef9c9d705f27'
        )
        console.log(getResponse.body)
        const response = await patchObjects ( '7',  
            testData.succesPatch
            )
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)

    })

})
