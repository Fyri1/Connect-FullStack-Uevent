import client from './client.js';
import { v4 as uuidv4 } from 'uuid';
import encrypt from './encrypt.js';
import process from 'process';

const users = [
  {
    login: 'Admin1',
    password: await encrypt('1234'),
    email: 'admin1@gmail.com',
    role: 'admin',
  },
  {
    login: 'moderator',
    password: await encrypt('1234'),
    email: 'moder@gmail.com',
    role: 'moderator',
  },
  {
    login: 'organization',
    password: await encrypt('1234'),
    email: 'organization@gmail.com',
    role: 'organization',
  },
  {
    login: 'user1',
    password: await encrypt('1234'),
    email: 'user1@gmail.com',
    role: 'user',
  },
  {
    login: 'user2',
    password: await encrypt('1234'),
    email: 'user3@gmail.com',
    role: 'user',
  },
  {
    login: 'user3',
    password: await encrypt('1234'),
    email: 'user4@gmail.com',
    role: 'user',
  },
  {
    login: 'user4',
    password: await encrypt('1234'),
    email: 'user4@gmail.com',
    role: 'user',
  },
  {
    login: 'user5',
    password: await encrypt('1234'),
    email: 'user5@gmail.com',
    role: 'user',
  },
];

const categories = [
  {
    title: 'amogus 1',
    description: 'create amogus 1',
  },
  {
    title: 'amogus 2',
    description: 'create amogus 2',
  },
  {
    title: 'amogus 3',
    description: 'create amogus 3',
  },
  {
    title: 'amogus 4',
    description: 'create amogus 4',
  },
  {
    title: 'amogus 5',
    description: 'create amogus 5',
  },
];

const cleanDatabase = async () => {
  try {
    await client('users').del();
    await client('roles').del();
    await client('events').del();
    await client('tickets').del();
    await client('categories').del();
    console.log('/--------------------\\');
    console.log('|database clean (^_^)|');
    console.log('|--------------------|');
  } catch (err) {
    throw err;
  }
};

const createOrganizarion = async (user_id) => {
  const id = uuidv4();
  await client('organization').insert({
    id,
    user_id,
    name_organization: 'Trello',
    phone_organization: '+380501234567',
    phone_staff: '+380507654321',
    address: 'Trello 2',
    email: 'trello@gmail.com',
    description:
      'Cloud-based small team project management software developed by Fog Creek Software. Trello uses a project management paradigm known as kanban, a method originally popularized by Toyota in the 1980s for supply chain management.',
    link_organization: 'trello.com​',
    is_confirmed: true,
  });
};

const setRole = async (user_id, role) => {
  const id = uuidv4();
  await client('roles').insert({ id, user_id, role });
};

const createTicket = async (event_id, user_id) => {
  const id = uuidv4();
  await client('tickets').insert({
    id,
    event_id,
    price: 150,
  });
};

const createEvent = async (user_id) => {
  const id = uuidv4();
  await client('events').insert({
    id,
    user_id,
    title: 'amogus1',
    description: 'abobus abobus',
    city: 'Amogusia',
    address: 'Amogus1',
    event_start: '2023-22-01',
    event_end: '2023-23-01',
  });
  const category = await client('categories').select('categories.id');
  await client('event_categories').insert({
    event_id: id,
    category_id: category[0].id,
  });
  for (let i = 0; i < 10; i += 1) {
    await createTicket(id, user_id);
  }
};

(async () => {
  try {
    await cleanDatabase();
    const promisesCategories = categories.map(async (data) => {
      const id = uuidv4();
      return client('categories').insert({ ...data, id });
    });
    await Promise.all(promisesCategories);
    const promisesUsers = users.map(async ({ role, ...data }, count) => {
      const id = uuidv4();
      await setRole(id, role);
      if (count === 2) {
        await createOrganizarion(id);
        await createEvent(id);
      }
      return client('users').insert({ ...data, active: true, id });
    });
    await Promise.all(promisesUsers);
    console.log('|     complete :)    |');
    console.log('\\--------------------/');
    process.exit();
  } catch (err) {
    console.log(err);
  }
})();
