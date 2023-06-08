// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: gitHubKey
// })
//
// await octokit.request('GET /events', {
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })
// fetch(url, {headers: {'Authorization': gitHubKey}})

// function getCommit(){
//     fetch('https://api.github.com/users',
//         {headers: {'Authorization': 'weatherAPI'}})
//         .then (response =>
//             console.log(response))
//         .catch (error =>
//             console.error(error));


    // document.querySelector('.commit').innerHTML =
// }
// console.log(response)

// const octokit = new Octokit({
//     auth: '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'
// })
//
// await octokit.request('GET /users/{username}/events/public', {
//     username: 'USERNAME',
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })

    // fetch('https://api.github.com/users/alexander-de-royal')
    //     .then (response =>
    //         console.log(response))
    //     .catch (error =>
    //         console.error(error));



// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: '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'
// })
//
// await octokit.request('GET /users/{username}/events/public', {
//     username: 'alexander-de-royal',
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })


    // fetch('https://api.github.com/users/alexander-de-royal/events/public')
    //     .then(response => {
    //         return response.json()
    // })
    //     .then(data => {
    //         console.log(data);
    //
    //         document.querySelector('.commit').innerHTML = data[0].payload.commits[0].url;
    //     });

fetch("https://api.github.com/users/alexander-de-royal-events/public", {headers: {'Authorization': `token ${gitHubKey}`}})
    .then(response = response.json())
    .then(data => {
        console.log(data);
        for (let event of data){
            if(event.type === "PushEvent"){
                return event.payload.commits[0].url;
            }
        }
    })
    .then (url = fetch(url, {headers: {'Authorization': `token ${gitHubKey}`}}))
    .then(response => response.json())
    .then(data => console.log(new date(data.commit.author.date)))






