import client from './client.js';
import { v4 as uuidv4 } from 'uuid';
import encrypt from './encrypt.js';
import process from 'process';

const users = [
  {
    login: 'Admin1',
    password: await encrypt('1234'),
    email: 'admin1@gmail.com',
    phone_number: '+380409318431',
    role: 'admin',
  },
  {
    login: 'moderator',
    password: await encrypt('1234'),
    email: 'moder@gmail.com',
    phone_number: '+380409318432',
    role: 'moderator',
  },
  {
    login: 'organization',
    password: await encrypt('1234'),
    email: 'organization@gmail.com',
    phone_number: '+380409318433',
    role: 'organization',
    first_name: "Amogus",
    second_name: "Abobus",
    last_name: "Nigers",
  },
  {
    login: 'user1',
    password: await encrypt('1234'),
    email: 'user1@gmail.com',
    role: 'user',
    phone_number: '+380409318434',
    content: "I think it's excellent!",
  },
  {
    login: 'user2',
    password: await encrypt('1234'),
    email: 'user3@gmail.com',
    role: 'user',
    phone_number: '+380409318435',
    content: 'I am a macaque :)',
  },
  {
    login: 'user3',
    password: await encrypt('1234'),
    email: 'user4@gmail.com',
    role: 'user',
    phone_number: '+380409318436',
    content: 'I peed yesterday XD',
  },
  {
    login: 'user4',
    password: await encrypt('1234'),
    email: 'user4@gmail.com',
    role: 'user',
    phone_number: '+380409318437',
    content: 'If you read this text, the pipe will fall off)))))',
  },
  {
    login: 'user5',
    password: await encrypt('1234'),
    email: 'user5@gmail.com',
    role: 'user',
    phone_number: '+380409318438',
    content: 'Niggas will always be slaves :O',
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
    await client('event_categories').del();
    await client('organization').del();
    await client('comments').del();
    await client('event_comments').del();
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
    secret_key:
      'sk_test_51Mg9UfDxrUTatUeLOCgBTViSh63SKNU7hixzWgz2VTR4ZXaYyxaHd6ccbJjUqmIVc0m9BDwFhyKjI9KNZSynyK4g00jS8lViec',
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
const createEventAndComment = async (id, user_id) => {
  await client('events').insert({
    id,
    user_id,
    title: 'amogus1',
    description: 'abobus abobus',
    city: cities[0],
    address: 'Amogus1',
    event_start: Date.parse('2023-01-22T18:00'),
    event_end: Date.parse('2023-01-23T18:00'),
  });
  const categories = await client('categories').select('categories.id');
  categories.map(async (category, count) => {
    if (count < 3) {
      await client('event_categories').insert({
        event_id: id,
        category_id: category.id,
      });
    }
  });
  for (let i = 0; i < 10; i += 1) {
    await createTicket(id, user_id);
  }
  return id;
};

const cities = ['Kyiv', 'Kharkiv', 'Ivano-Frankivsk', 'Donetsk'];

const createEvent = async (user_id, count) => {
  const id = uuidv4();
  await client('events').insert({
    id,
    user_id, 
    title: 'amogus' + (count + 1),
    description: `Доброго времени суток, друзья!
    Хочу поделиться опытом по борьбе с PHPUnit/DbUnit в связке с MySQL. Далее небольшая предыстория.
    
    Краткая предыстория
    
    В процессе написания одного веб-приложения возникла необходимость тестировать код на PHP, интенсивно взаимодействующий с БД MySQL. В проекте в качестве фреймворка модульного тестирования использовался порт xUnit — PHPUnit. В результате было принято решение писать тесты для модулей, непосредственно взаимодействующих с базой, подцепив плагин PHPUnit/DbUnit. Дальше я расскажу о тех трудностях, которые возникли при написании тестов и о том, каким способом я их преодолел. В ответ же хотелось бы получить комментарии знающих людей относительно корректности моих решений.
    
    Как работает DbUnit
    
    Подпункт предназначен для тех, кто не знаком с методикой тестирования с использованием PHPUnit и/или DbUnit. Кому не интересно, смело можно переходить к следующему.
    
    Далее по тексту:
    
        тестовый класс — класс, содержащий код модульных тестов, наследник любой из реализаций PHPUnit::TestCase;
        тестируемый класс — класс, который необходимо протестировать.
    
    Так как подпункт для начинающих, то для начала будет рассмотрена процедура модульного тестирования обычных классов PHP, а потом описаны отличия при тестировании кода, взаимодействующего с БД.
    
    Тестирование обычных классов PHP
    
    Чтобы протестировать класс, написанный на PHP, с использованием фреймворка PHPUnit, необходимо создать тестовый класс, расширяющий базовый класс PHPUnit_Framework_TestCase. Затем создать в этом классе публичные методы, начинающиеся со слова test (если создать метод, который будет называться по-другому, он не будет автоматически вызван при прогоне тестов), и поместить в них код, выполняющий действия с объектами тестируемого класса и проверяющий результат. На этом можно закончить и скормить полученный класс phpunit, который, в свою очередь, последовательно вызовет все тестовые методы и любезно предоставит отчет об их работе. Однако в большинстве случаев в каждом из тестовых методов будет повторяющийся код, подготавливающий систему для работы с тестируемым объектом. Для того, чтобы избежать дублирования кода, в классе PHPUnit_Framework_TestCase созданы защищенные методы setUp и tearDown, имеющие пустую реализацию. Эти методы вызываются перед и после запуска очередного тестового метода соответственно и служат для подготовки системы к выполнению тестовых действий и очистки ее после завершения каждого теста. В тестовом классе, расширяющем PHPUnit_Framework_TestCase, можно переопределить эти методы и поместить повторяющийся ранее в каждом тестовом методе код в них. В результате последовательность вызова методов при прогонке тестов будет следующая:`,
    city: count !== 3 ? cities[count] : cities[0],
    address: 'Amogus' + (count + 1),
    event_start: '2023-04-1' + (count + 1),
    event_end: '2023-04-1' + (count + 2),
  });
  const category = await client('categories').select('categories.id');
  await client('event_categories').insert({
    event_id: id,
    category_id: category[count].id,
  });
  await client('event_categories').insert({
    event_id: id,
    category_id: category[count + 1].id,
  });
  for (let i = 0; i < 10; i += 1) {
    await createTicket(id, user_id);
  }
};

const createComment = async (event_id, user_id, content) => {
  const id = uuidv4();
  await client('event_comments').insert({
    event_id,
    comment_id: id,
  });
  await client('comments').insert({
    id,
    user_id,
    content,
  });
};

(async () => {
  try {
    await cleanDatabase();

    const promisesCategories = categories.map(async (data) => {
      const id = uuidv4();
      return client('categories').insert({ ...data, id });
    });
    await Promise.all(promisesCategories);
    const eventId = uuidv4();
    const promisesUsers = users.map(
      async ({ role, content, ...data }, count) => {
        const id = uuidv4();
        await setRole(id, role);
        if (count === 2) {
          await createOrganizarion(id);
          await createEventAndComment(eventId, id);
          for (let i = 1; 3 >= i; i += 1) {
            await createEvent(id, i);
          }
        }
        if (count > 2) {
          await createComment(eventId, id, content);
        }
        return client('users').insert({ ...data, active: true, id });
      }
    );
    await Promise.all(promisesUsers);
    console.log('|     complete :)    |');
    console.log('\\--------------------/');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
})();
