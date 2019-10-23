import * as mongoose from 'mongoose';

/**
 *  toDo:
 *  this connection string and password contain sensitive information
 *  it expected to store someware else from code preferable 
 *  encrypted or in a key manager
 * */
export const getCreditCardModel = (async () => {
  const options: object = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  // console.log('connection : mongodb://mongo:27017/mongodb');
  await mongoose.connect('mongodb://mongo:27017/mongodb', options) // docker url
  // await mongoose.connect('mongodb://localhost:27017/mongodb', options) // docker url
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error));
    
    var cardSchema: object = new mongoose.Schema({
        customerId: Number,
        document: String,
        name: String,
        number: Number,
        type: String,
        csv: Number,
    });

    if(mongoose.connection.models['CreditCard']) {
      delete mongoose.connection.models['CreditCard'];
    }

    const creditCardModel: any = mongoose.model('CreditCard', cardSchema);

    // console.log('=====creditCardModel====', creditCardModel, '=========');
    return creditCardModel;
});
