var name = 'alex font';
console.log(name.toUpperCase());

console.log('My Previous Experience')

var positions = [
    {
        companyName: 'Covalence',
        title: 'Student',
        description: 'Developer'
    }, 
    {
        companyName: 'Internet Lava',
        title: 'Content Writer',
        description: 'Wrote content'
    }, 
    {
        companyName: 'Oxford Exchange',
        title: 'Bookstore Associate',
        description: 'Sold Books'
    }

]



function displayPosition(companyName, title, description) {
    console.log(companyName, title, description)
}

for (var t = 0; t < positions.length; t++) {
    displayPosition(positions[t].companyName, positions[t].title, positions[t].description);    
}


var skills = [
    {
        cool: true,
        skill: 'english',
    },
    {
        cool: false,
        skill: 'HTML'
    },
    {
        cool: false,
        skill: "Overwatch",

    },
    {
        cool: true,
        skill: "soccer"
    }
]


console.log('My Skills')


function skillName(cool, skill) {
    if (cool === true) {
        console.log(`Bam: ${skill}`);
    } else {
        console.log(skill);
    }
}

for (var i = 0; i < skills.length; i++) {
    skillName(skills[i].cool, skills[i].skill);
}




console.log('My Interests')
console.log('* Watching Soccer')
console.log('* reading')
console.log('* my girlfriend')
console.log('* Copywriter')
console.log('* Studying English Literature at University')



