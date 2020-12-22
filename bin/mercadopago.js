const mp = require('mercadopago');

mp.configure({
    sandbox : 'true', 
    access_token : 'TEST-1511465547078946-110416-bad69d4ff3568bd1068ab5c7e6718088-89886413'
})

async function comprar(preference) {
    try {
        return await mp.preferences.create(preference);
    } catch(error) {
        throw error;
    }
}

module.exports = {comprar}