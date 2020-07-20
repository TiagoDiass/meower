const fileSystem = require('fs');
const data = require('../../database.json');

function writeData(data) {
  fileSystem.writeFile('database.json', JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send(`[SERVER] Write file error: ${err}`);
    }
  });
}

module.exports = {
  index(request, response) {
    return response.status(200).json({
      status: 200,
      message: 'Mews retrieved succesfully',
      data: data.mews,
    });
  },

  create(request, response) {
    const { username, mewBody } = request.body;

    if (!username) {
      return response.status(400).json({
        status: 400,
        message: 'You must insert an username for your mew',
      });
    }

    if (!mewBody) {
      return response.status(400).json({
        status: 400,
        message: 'Your mew cannot be empty',
      });
    }

    // Taking the last used id from the last element on the array
    const lastUsedId = data.mews[data.mews.length - 1].id;

    const newMew = {
      id: lastUsedId + 1,
      username,
      mewBody,
      posted_at: Date.now(),
    };

    data.mews.push(newMew);

    writeData(data);

    return response.status(201).json({
      status: 201,
      message: 'Mew posted succesfully',
    });
  },
};
