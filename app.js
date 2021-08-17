var _ = require('lodash')
var chalk = require('chalk')
var array = [1];
var other = _.concat(array, 2, [1], [
    [4]
]);
console.log(other);
console.log(chalk.blue(array));
var newresult = _.difference([2, 1], [2, 3]);
console.log(newresult);
var users = [
    { "user": "Mai", "age": 36, "active": true },
    { "user": "Anh", "age": 40, "active": true },
    { "user": "Nguyen", "age": 20, "active": true }
]
var user = _.find(users, function(user) {
    return user.age < 40;
})
var user2 = _.filter(users, function(user2) {
    return user2.age < 40;
})
console.log("user : ", user);
console.log("user2 : ", user2)