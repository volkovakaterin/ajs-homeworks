import health from '../health';

test ('health', ()=>{
    expect(health({name: 'Маг', health: 90})).toBe("healthy");
})