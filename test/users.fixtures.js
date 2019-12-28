const bcrypt = require('bcryptjs');

function makeUsersArray(){
    return [
        {
            fname : "Rick",
            lname : "Mcqueeney",
            dob : '10/10/1980',
            email : "rmcqueeney@gmail.com",
            password : "Password1!",
            marital_status : "Married",
            occupation : "Marketing",
            gender : "Male",
            bio : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.", 
            date_created: '10/10/1980'
        },
        {
            fname : "Summer",
            lname : "Lane",
            dob : '10/10/1980',
            email : "slane@gmail.com",
            password : "Password2!",
            marital_status : "Married",
            occupation : "Fashion Designer",
            gender : "Female",
            bio : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.", 
            date_created: '10/10/1980'
        },
        {
            fname : "Larry",
            lname : "Savage",
            dob : '10/10/1980',
            email : "lsavage@aol.com",
            password : "Password3!",
            marital_status : "Widow",
            occupation : "Construction",
            gender : "Male",
            bio : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.", 
            date_created: '10/10/1980'
        },
    ];
}

function makeEventsArrayForUsersService(){
    return [
        {
            organizer : 1,
            title : "Event 1 Title",
            event_purpose : "Singles Night",
            restaurant : "Sonora Town",
            address : "321 4th St, Los Angeles, CA 90003",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : true, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 2,
            title : "Event 2 Title",
            event_purpose : "Game Night",
            restaurant : "Button Mash",
            address : "123 2nd St, Los Angeles, CA 90001",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 3,
            title : "Event 3 Title",
            event_purpose : "Networking",
            restaurant : "Water Grill",
            address : "30923 Union Ave, Los Angeles, CA 90301",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 1,
            title : "Event 4 Title",
            event_purpose : "Singles Night",
            restaurant : "Golden Pouch",
            address : "123 4th St, Los Angeles, CA 90043",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 1,
            title : "Event 5 Title",
            event_purpose : "Social",
            restaurant : "Islands",
            address : "5655 2nd St, Los Angeles, CA 95401",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 2,
            title : "Event 6 Title",
            event_purpose : "Networking",
            restaurant : "Cheesecake Factory",
            address : "35653 Union Ave, Los Angeles, CA 90301",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 3,
            title : "Event 7 Title",
            event_purpose : "Singles Night",
            restaurant : "Noodle World",
            address : "32441 4th St, Los Angeles, CA 90003",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : true, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 3,
            title : "Event 8 Title",
            event_purpose : "Social",
            restaurant : "Noodle House",
            address : "1656 2nd St, Los Angeles, CA 96401",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 3,
            title : "Event 9 Title",
            event_purpose : "Networking",
            restaurant : "Ten Ramen",
            address : "35583 Union Ave, Los Angeles, CA 90651",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
        {
            organizer : 1,
            title : "Event 10 Title",
            event_purpose : "Social",
            restaurant : "Killer Noodle",
            address : "30923 Crenshaw Ave, Los Angeles, CA 90341",
            date : new Date('10/31/1983'),
            time : "18:00:00",
            description : "Nam ullamcorper finibus purus, id facilisis nisi scelerisque in. Aliquam vel nisi id tellus efficitur sagittis. Sed vel maximus erat. Nunc dapibus purus massa, in molestie ipsum gravida vel. Phasellus varius nec risus a ornare.",
            singles_only : false, 
            date_created: new Date('10/31/2020')
        },
    ];
}

function makeAttendeesArrayForUsersTest(){
    return [
        {
            user_id : 1,
            event_id : 1,
        },
        {
            user_id : 2,
            event_id : 2,
        },
        {
            user_id : 3,
            event_id : 3,
        },
                {
            user_id : 1,
            event_id : 2,
        },
        {
            user_id : 2,
            event_id : 3,
        },
        {
            user_id : 1,
            event_id : 3,
        },

    ];
}

const encryptEmail = (email) => {
    let indexOfAt = email.indexOf('@');
    let sliced = email.slice(1,indexOfAt-1);
    let regx = new RegExp(sliced,'gi');
    let hiddenEmail = email.replace(regx,'*'.repeat(sliced.length));
    return hiddenEmail;
  } 

function seedUsers(users) {
    const preppedUsers = users.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, 12)
      }))
    return preppedUsers;
}

module.exports = {
    makeUsersArray,
    makeEventsArrayForUsersService,
    makeAttendeesArrayForUsersTest,
    seedUsers,
    encryptEmail
}