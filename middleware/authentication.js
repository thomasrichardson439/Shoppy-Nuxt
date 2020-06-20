export default async function ({ app, store, $axios, isServer }) {
    // let token = app.$cookies.get('token');
    // if (token) {
    //     let response = await $axios.$get('/user', { headers: { Cookie: 'token=' + token + ';' } });
    //     console.log(response);

    //     if (typeof response !== 'object') {
    //         response = { "status": true, "user": { "seller_id": 5, "username": "Jensui", "email": "stopatt@gmail.com", "avatar": "\/images\/default-avatar.png?id=55b864e42ffc120971da", "api_key": "syjz5BhFz1HxzGVHvD3qLL8CKpdiuzP8hYT5U7rMiyZ7izb4lF", "space": null, "currency": "EUR", "dark_theme": false, "admin": true }, "cashier": [{ "name": "BTC", "image": "\/images\/gateways\/btc.png?id=4c1bc76a100f4e3388a6", "title": "Bitcoin", "available": true, "checked": false }, { "name": "ETH", "image": "\/images\/gateways\/eth.png?id=68bad0bd8cde227598ba", "title": "Ethereum", "available": true, "checked": false }, { "name": "LTC", "image": "\/images\/gateways\/ltc.png?id=24eb898301169eb0ed1f", "title": "Litecoin", "available": true, "checked": false }, { "name": "PayPal", "image": "\/images\/gateways\/paypal.png?id=a97a05f07272c9473d0b", "title": "PayPal", "available": true, "checked": false }, { "name": "Stripe", "image": "\/images\/gateways\/stripe.png?id=636ecdb8c58ab28912e6", "title": "Stripe", "available": false, "checked": false }], "unreadQueries": 0, "notifications": [], "currencies": [{ "currency": "AUD" }, { "currency": "BRL" }, { "currency": "CAD" }, { "currency": "CHF" }, { "currency": "CNY" }, { "currency": "CZK" }, { "currency": "DKK" }, { "currency": "EUR" }, { "currency": "GBP" }, { "currency": "HKD" }, { "currency": "HRK" }, { "currency": "ILS" }, { "currency": "INR" }, { "currency": "JPY" }, { "currency": "MXN" }, { "currency": "MYR" }, { "currency": "NOK" }, { "currency": "NZD" }, { "currency": "PHP" }, { "currency": "PLN" }, { "currency": "RUB" }, { "currency": "SEK" }, { "currency": "SGD" }, { "currency": "USD" }, { "currency": "ZAR" }], "banned": false };
    //     }

    //     if (response.status && response.user) {
    //         await store.dispatch('user/login', response.user);
    //     }
    // }
}
