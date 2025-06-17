import { capitalize } from "../../utils/capitalize";

describe('utils/capitalize', ()=> {
    test('Passing all lowercase string should return capalized string',()=> {
        const result = capitalize('abracadabra');
        expect(result).toBe('Abracadabra');
    })
})
