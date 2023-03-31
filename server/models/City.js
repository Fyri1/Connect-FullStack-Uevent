import fsp from 'fs/promises';
import path from 'path';

class City {
  async getAll() {
    const dataFile = await fsp.readFile(path.join(path.resolve(), 'ua-cities.json'), 'utf-8');
    const cities = JSON.parse(dataFile);
    return cities;
  }
}

export default new City();
