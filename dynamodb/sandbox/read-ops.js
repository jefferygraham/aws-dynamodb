import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get(
//   {
//     TableName: 'td_notes_sdk',
//     Key: {
//       user_id: 'ABC',
//       timestamp: 1,
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

// docClient.query(
//   {
//     TableName: 'td_notes_sdk',
//     KeyConditionExpression: 'user_id = :uid',
//     ExpressionAttributeValues: {
//       ':uid': 'cc',
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

// docClient.scan(
//   {
//     TableName: 'td_notes_sdk',
//     FilterExpression: 'user_id = :uid',
//     ExpressionAttributeValues: {
//       ':uid': 'dd',
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   }
// );

docClient.batchGet(
  {
    RequestItems: {
      td_notes: {
        Keys: [{ user_id: 'test_user', timestamp: 1610091469 }],
      },
      td_notes_sdk: {
        Keys: [{ user_id: 'ABC', timestamp: 1 }],
      },
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
