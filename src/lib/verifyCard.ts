import * as Ajv from 'ajv';
import * as requestSchema from './../schema/requestCardValidate.json'
import * as responseSchema from './../schema/responseCardValidate.json'
import { getCreditCardModel } from './models/Cards';
import { checkCardNumberLength, validateCardNumber } from './validations';

export enum CardType {
    Visa = 'Visa',
    MasterCard = 'MasterCard',
    Discover = 'Discover',
    AMEX = 'AMEX',
};
export enum IDocument { creditcard };
export enum Status {
    valid = 'valid',
    invalid = 'invalid',
}

export declare interface IPayload {
    customerId: number;
    document: IDocument;
    name: string;
    type: CardType;
    number: number;
    csv: number;
}

export declare interface IResponse {
    status: Status;
    content: IPayload;
}

/**
 * saves pet to the database and return database response
 * @param body
 */
export const saveCreditCard = (async (payload: IPayload) => {
    const CreditCardModel: any = await getCreditCardModel();

    const CreditCard: any = new CreditCardModel(payload);

    const creditCard: any = await CreditCard.save()
    .catch((error) => {
      console.log('Error saving pet.', error);
      throw new Error(error);
    });

    return creditCard;
});

const validate = (body: object, schema: any, ctx: any, name: string) => {
    // validate the request agains the json schema to ensure intergrity of request payload 
    const ajv: any = new Ajv ({ allErrors: true });
    const valid: boolean = ajv.validate(schema, body); 
    if (!valid) {
        console.log(`${name} schema validation errors : `, ajv.errors);
        ctx.throw(422, `${name} validation error(s): ` + JSON.stringify(ajv.errors));
    }
}

/**
 * validate the request agains the create schema and process create response 
 * @param ctx 
 */
export const verifyCreditCard = (async (ctx)=> {
    let status: Status = Status.invalid; 
    const { request: { body, header } } = ctx;

    const requestPayload: IPayload = body;

    // check content type header
    if (header['content-type'] !== 'application/json') {
        ctx.throw(422, 'Incorrect `content-type` header recieved, expect `application/json`');
    }

    console.log('request payload : ', requestPayload);

    // validate request agains request schema
    validate(requestPayload, requestSchema, ctx, 'Request');

    // Validate credit Card numbers
    const validateCardType = checkCardNumberLength(requestPayload.type, requestPayload.number);
    const validCardNumber = validateCardNumber(requestPayload.number);

    if ( validateCardType || validCardNumber ) {
        status = Status.valid;
    }

    const { customerId, document, type, name, number, csv } = await saveCreditCard(requestPayload);

    const content = <IPayload> { customerId, document, type, name, number, csv };

    const respsonse = <IResponse> {
        status,
        content: content,
    };

    // validate request agains request schema
    validate(respsonse, responseSchema, ctx, 'Response');

    ctx.body = respsonse;
});
