const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// TODO 2:
let selectedUsers = users.filter(function(list){
    return list.languages.length >= 3;
});
console.log(selectedUsers);

// TODO 3:
let userEmail = users.map(function(n){
    return n.email;
})
console.log(userEmail)

// TODO 4:
let totalYearsExp = users.reduce(function(totalYears, user){
    return totalYears + user.yearsOfExperience;
},0)
console.log(totalYearsExp);

// TODO 5:
let longestUserEmail = users.reduce(function(longestEmail, user){
    if(user.email.length >= longestEmail.length){
        longestEmail = user.email;
    }
    return longestEmail;
},"")
console.log(longestUserEmail)

// TODO 6:
const userNames = users.reduce(function(userNamesString, user){
    return userNamesString + user.name + ", "
}, "")
console.log(userNames);




