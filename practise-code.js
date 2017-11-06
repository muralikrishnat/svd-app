var authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdG90dGltcHVkaUBldm9rZXRlY2hub2xvZ2llcy5jb20iLCJzY29wZSI6WyJBRE1JTiJdLCJpc3MiOiJodHRwczovL3N2ZC11cC1yZXN0LWRldi5henVyZXdlYnNpdGVzLm5ldCIsImV4cCI6MTUwOTM5ODY0OX0.scUwbwMsUSRwCSOBrko_Jv8cGz0t-VpzCBKCfNfnbTAj8fpAZLOL5t3SQ4nScvqSJn6nfW5xCLjVw9QAHUjxWw';

var urlprefix = 'https://svd-up-rest-dev.azurewebsites.net/api/v1';
$.ajax({
    method: 'GET',
    url: urlprefix + '/customers/search/findByOwner?email=muralikrishna8811@gmail.com',
    headers: { 'Authorization': authorization }
});

// user create
$.ajax({
    method: 'POST',
    url: urlprefix + '/users',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        email: 'muralikrishna8811+cp1@gmail.com',
        password: 'password',
        roles: [{
            "role": "CUSTOMER_PURCHASER"
        }]
    }),
    contentType: 'application/json'
});

// login
$.ajax({
    method: 'POST',
    url: urlprefix + '/auth/login',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        email: 'muralikrishna8811+cp1@gmail.com',
        password: 'password'
    }),
    contentType: 'application/json'
});

// users/{id}/actions/reactivate
$.ajax({
    method: 'POST',
    url: urlprefix + '/users/1300/actions/reactivate',
    headers: { 'Authorization': authorization },
    contentType: 'application/json'
});


// 175327
$.ajax({
    method: 'POST',
    url: urlprefix + '/auth/activate',
    contentType: 'application/json',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        email: 'muralikrishna8811+cp1@gmail.com',
        authToken: '175327'
    })
});

// auth me
$.ajax({
    method: 'GET',
    url: urlprefix + '/auth/me',
    contentType: 'application/json',
    headers: { 'Authorization': authorization }
});

// users/1300/customer
$.ajax({
    method: 'GET',
    url: urlprefix + '/users/1300/customer',
    contentType: 'application/json',
    headers: { 'Authorization': authorization }
});


// create customer 
$.ajax({
    method: 'POST',
    url: urlprefix + '/customers',
    contentType: 'application/json',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        name: 'Evoke Customer Team Test1'
    })
});
// 515

$.ajax({
    method: 'GET',
    url: urlprefix + '/customers/search/findByOwner?email=' + encodeURIComponent('muralikrishna8811+cp1@gmail.com'),
    contentType: 'application/json',
    headers: { 'Authorization': authorization }
});

$.ajax({
    method: 'GET',
    url: urlprefix + '/customers/515/users',
    contentType: 'application/json',
    headers: { 'Authorization': authorization }
});




$.ajax({
    method: 'POST',
    url: urlprefix + '/users/1300/customer',
    contentType: 'application/json',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        id: 515
    })
});


$.ajax({
    method: 'POST',
    url: urlprefix + '/users',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        email: 'muralikrishna8811+cs1@gmail.com',
        password: 'password',
        roles: [{
            "role": "CUSTOMER"
        }]
    }),
    contentType: 'application/json'
});

//1301


// login
$.ajax({
    method: 'POST',
    url: urlprefix + '/auth/login',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        email: 'muralikrishna8811+cs1@gmail.com',
        password: 'password'
    }),
    contentType: 'application/json'
});

// Binding user to Team
$.ajax({
    method: 'POST',
    url: urlprefix + '/users/1301/customer',
    contentType: 'application/json',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        id: 515
    })
});

// 228272

$.ajax({
    method: 'POST',
    url: urlprefix + '/auth/activate',
    contentType: 'application/json',
    headers: { 'Authorization': authorization },
    data: JSON.stringify({
        email: 'muralikrishna8811+cs1@gmail.com',
        authToken: '228272'
    })
});

$.ajax({
    method: 'GET',
    url: urlprefix + '/customers/515/users',
    contentType: 'application/json',
    headers: { 'Authorization': authorization }
});

$.ajax({
    method: 'GET',
    url: urlprefix + '/customers/search/findByOwner?email=' + encodeURIComponent('muralikrishna8811+cs1@gmail.com'),
    contentType: 'application/json',
    headers: { 'Authorization': authorization }
});


// muralikrishna8811+cs1509530156379@gmail.com
// 1328
// muralikrishna8811+cs1509646456626@gmail.com

