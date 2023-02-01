import client from './client.js';
import { v4 as uuidv4 } from 'uuid';
import encrypt from './encrypt.js';
import process from 'process';

const users = [{
    login: 'Admin1',
    password: await encrypt('1234'),
    email: 'admin1@gmail.com',
    role: 'admin',
}, {
    login: 'moderator',
    password: await encrypt('1234'),
    email: 'moder@gmail.com',
    role: 'moderator',
}, {
    login: 'organization',
    password: await encrypt('1234'),
    email: 'organization@gmail.com',
    role: 'organization',
}, {
    login: 'user1',
    password: await encrypt('1234'),
    email: 'user1@gmail.com',
    role: 'user',
}];

const cleanDatabase = async () => {
    await client('users').del();
    await client('roles').del();
    await client('events').del();
    await client('tickets').del();
}

const setRole = async (user_id, role) => {
    const id = uuidv4()
    await client('roles').insert({ id, user_id, role })
}

const createTicket = async (event_id, user_id) => {
    const id = uuidv4();
    await client('tickets').insert({
        id,
        event_id,
        price: 150,
    });
}

const createEvent = async (user_id) => {
    const id = uuidv4();
    await client('events').insert({
        id,
        user_id,
        title: 'amogus1',
        description: 'abobus abobus',
        category: 'amogus1',
        city: 'Amogusia',
        address: 'Amogus1',
        event_start: '2023-22-01',
        event_end: '2023-23-01',
    });
    for (let i = 0; i < 10; i += 1) {
        await createTicket(id, user_id);
    }
}

(async () => {
    try {
        await cleanDatabase();
        const promisesUsers = users.map(async ({ role, ...data }, count) => {
            const id = uuidv4();
            await setRole(id, role);
            if (count === 2) {
                await createEvent(id);
            }
            return client('users').insert({ ...data, id });
        });
        await Promise.all(promisesUsers);
        console.log('complete :)')
        process.exit();
        return;
    } catch (err) {
        console.log(err)
    }
})();