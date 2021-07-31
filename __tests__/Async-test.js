const axios = require('axios');
const data = require('../config/data');

jest.mock('axios');

test('should fetch data shared', () => {

    const users = [{
        "id": 1,
        "title": "Morning",
        "description": "Soft Lighten Emmited a New Day",
    }, {
        "id": 2,
        "title": "Day",
        "description": "The Wind Scent Leavin Trail",
    }];

    const resp = { data : users };

    axios.get.mockImplementation(() => Promise.resolve(resp));

  data.all().then(resp => expect(resp.data).toEqual(users));
});