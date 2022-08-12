const {createToken} = require('../../middlewares/createToken.js');

describe('test ========== tokens', ()=>{
    test('creacion de tokens',()=>{
        const iduser = 123123;
        const token = createToken(iduser);
        expect(token).toBe("eyJhbGciOiJIUzI1NiJ9.MTIzMTIz.21i8yJWN-BYpWNk34aqV8AWfdrhBm85BHjjquSg-27g");
    })
})