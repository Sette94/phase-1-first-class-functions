const eightHomersClub = [{
    "name": "Randy Arozarena",
    "total": 10,
    "postseason": "2020"
},
{
    "name": "Adolis Garcia",
    "total": 8,
    "postseason": "2023"
},
]

//const ballpark = function () { console.log(`Lets go to Citi Field`) } extra

function postSeasonLeaders() {
    { console.log(eightHomersClub) }
}


function receivesAFunction(postSeasonLeaders) {
    return (postSeasonLeaders())
}

function returnsANamedFunction() {
    return (receivesAFunction)
}

function returnsAnAnonymousFunction() {
    return (
        (name) => console.log(`Lets go to ${name}`)
    )
}

returnsANamedFunction(receivesAFunction(postSeasonLeaders))