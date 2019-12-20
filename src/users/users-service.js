const bcrypt = require('bcryptjs');

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UsersService = {
    getAllUsers(knex){
        return knex.select('*')
            .from('users')
    },
    insertUser(knex, newUser){
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(([user]) => {
                return user
            })
    },
    getUserById(knex, id){
        return knex
            .from('users')
            .select('*')
            .where('id',id)
            .first()
    },
    getAllEventsByUserId(knex, user_id){
        /* Not Implemeneted yet */
        /* Get's all of the events that the User is scheduled to attend for Dashboard on client */
        return knex.raw(`select events.id as event_id, events.organizer as organizer_id, (select users.fname from users where events.organizer = users.id) as Organizer, events.restaurant, events.address, events."date", events."time", events.event_purpose, events.description 
        from 
        attendees 
        inner join 
        events on attendees.event_id = events.id 
        inner join users on attendees.user_id = users.id 
        where users.id = ${user_id}`)
            .then(res => {
                return res.rows
            })
    },
    deleteUser(knex, id){
        return knex('users')
            .where({id})
            .delete()
    },
    updateUserById(knex, id, userUpdates){
        return knex('users')
            .where({ id })
            .update(userUpdates)
    },
    validatePassword(password){
        // password length
        if (password.length < 8 || password.length > 72) {
            return res
            .status(400)
            .send('Password must be between 8 and 72 characters');
        }

        if (password.startsWith(' ') || password.endsWith(' ')) {
            return 'Password must not start or end with empty spaces'
        }
    
        // password contains digit, using a regex here
        if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
            return 'Password must contain 1 upper case, lower case, number and special character';
        } 
        return null;
    },
    hashPassword(password){
        return bcrypt.hash(password, 12);
    },
    hasUserWithEmail(db, email){
        return db('users')
            .where({ email })
            .first()
            .then(user => !!user)
    }
};

module.exports = UsersService;