import path from 'path';
import moment from 'moment';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const migrations = {
  directory: path.join(__dirname, 'migrations'),
};

export const development = {
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite',
  },
  // pool: {
  //   afterCreate: (conn, cb) => {
  //     console.log(conn)
  //     conn.query(`SET timezone = 'UTC'`, err => {
  //       cb(err, conn);
  //     });
  //   }
  // },
  useNullAsDefault: false,
  migrations,
};

export const test = {
  client: 'sqlite3',
  connection: ':memory:',
  useNullAsDefault: true,
  // debug: true,
  migrations,
};

export const production = {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  useNullAsDefault: true,
  migrations,
};
