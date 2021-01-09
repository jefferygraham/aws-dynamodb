import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const ddb = new AWS.DynamoDB();

ddb.listTables({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// ddb.describeTable(
//   {
//     TableName: 'td_notes_sdk',
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );

// ddb.createTable(
//   {
//     TableName: 'td_notes_sdk',
//     AttributeDefinitions: [
//       {
//         AttributeName: 'user_id',
//         AttributeType: 'S',
//       },
//       {
//         AttributeName: 'timestamp',
//         AttributeType: 'N',
//       },
//     ],
//     KeySchema: [
//       {
//         AttributeName: 'user_id',
//         KeyType: 'HASH',
//       },
//       {
//         AttributeName: 'timestamp',
//         KeyType: 'RANGE',
//       },
//     ],
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 1,
//       WriteCapacityUnits: 1,
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

// ddb.updateTable(
//   {
//     TableName: 'td_notes_sdk',
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 2,
//       WriteCapacityUnits: 1,
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );

// ddb.deleteTable(
//   {
//     TableName: 'td_notes_sdk',
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );
