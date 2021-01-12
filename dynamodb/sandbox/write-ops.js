import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put(
//   {
//     TableName: 'td_notes_sdk',
//     Item: {
//       user_id: 'bb',
//       timestamp: 2,
//       title: 'changed title',
//       content: 'changed content',
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

// docClient.update(
//   {
//     TableName: 'td_notes_sdk',
//     Key: {
//       user_id: 'bb',
//       timestamp: 1,
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//       '#t': 'title',
//     },
//     ExpressionAttributeValues: {
//       ':t': 'Updated Title',
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

// docClient.delete(
//   {
//     TableName: 'td_notes_sdk',
//     Key: {
//       user_id: 'bb',
//       timestamp: 2,
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

docClient.batchWrite(
  {
    RequestItems: {
      td_notes_sdk: [
        {
          DeleteRequest: {
            Key: {
              user_id: 'bb',
              timestamp: 1,
            },
          },
        },
        {
          PutRequest: {
            Item: {
              user_id: 'cc',
              timestamp: 2,
              title: 'bw title',
              content: 'bw content',
            },
          },
        },
        {
          PutRequest: {
            Item: {
              user_id: 'dd',
              timestamp: 2,
              title: 'bw title dd',
              content: 'bw content dd',
            },
          },
        },
      ],
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
