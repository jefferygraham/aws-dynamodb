const express = require('express');
const moment = require('moment');
const _ = require('underscore');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const { route } = require('.');

const router = express.Router();

AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

const tableName = 'td_notes';

var user_id = 'test_user';
var user_name = 'Test User';

router.post('/api/note', (req, res, next) => {
  let item = req.body.Item;
  item.user_id = user_id;
  item.user_name = user_name;
  item.note_id = user_id + ':' + uuidv4();
  item.timestamp = moment().unix();
  item.expires = moment().add(90, 'days').unix();

  docClient.put(
    {
      TableName: tableName,
      Item: item,
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(err.statusCode).send({
          message: err.message,
          status: err.statusCode,
        });
      } else {
        return res.status(200).send(item);
      }
    }
  );
});

router.patch('/api/note', (req, res, next) => {
  let item = req.body.Item;
  item.user_id = user_id;
  item.user_name = user_name;
  item.expires = moment().add(90, 'days').unix();

  docClient.put(
    {
      TableName: tableName,
      Item: item,
      ConditionExpression: '#t = :t',
      ExpressionAttributeNames: {
        '#t': 'timestamp',
      },
      ExpressionAttributeValues: {
        ':t': item.timestamp,
      },
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(err.statusCode).send({
          message: err.message,
          status: err.statusCode,
        });
      } else {
        return res.status(200).send(item);
      }
    }
  );
});

module.exports = router;
