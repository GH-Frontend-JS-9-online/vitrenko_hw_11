let users;

fetch('./fake_api/db.json').then(res => users = res.json)