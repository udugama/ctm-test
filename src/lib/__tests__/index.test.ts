import * as clone from 'lodash.clone';
import { saveCreditCard, verifyCreditCard, Status } from '../verifyCard';
import { saveCardResponse, body } from './fixtures/requests';
import { server } from '../../index';
import * as request from 'supertest';

describe('POST creditcard/verify', () => {
    afterAll(() => {
        server.close();
    });
    it('is a function', () => {
        expect(verifyCreditCard).toBeInstanceOf(Function);
    });

    test('successfully response', async () => {
        (saveCreditCard as any) = jest
            .fn()
            .mockReturnValue(saveCardResponse);
        await (request.agent(server) as any)
        .post('/creditcard/verify')
        .send(body)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then((response) => {
            expect(response.body.status).toEqual(Status.valid);
            expect(response.body.status).toMatchSnapshot();
        });
    });

    test('successful response with invalid status - invalid type validation', async () => {
        const invalidBody: any = clone(body);
        invalidBody.number = 5408041234567893; // MasterCard type of number as a Visa
        (saveCreditCard as any) = jest
            .fn()
            .mockReturnValue(saveCardResponse);
        await (request(server) as any)
        .post('/creditcard/verify')
        .send(invalidBody)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then((response) => {
            expect(response.body.status).toEqual(Status.invalid);
            expect(response.body).toMatchSnapshot();
        }) 
    });

    test('successful response with invalid status - invalid number', async () => {
        const invalidBody: any = clone(body);
        invalidBody.number = 408941234567893; // incorect Visa number
        (saveCreditCard as any) = jest
            .fn()
            .mockReturnValue(saveCardResponse);
        await (request(server) as any)
        .post('/creditcard/verify')
        .send(invalidBody)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then((response) => {
            expect(response.body.status).toEqual(Status.invalid);
            expect(response.body).toMatchSnapshot();
        });
    });

    test('error response with invalid type - schema error - status 422', async () => {
        const invalidBody: any = clone(body);
        invalidBody.type = 'Veeesa'; // incorect card type
        (saveCreditCard as any) = jest
            .fn()
            .mockReturnValue(saveCardResponse);
        await (request(server) as any)
        .post('/creditcard/verify')
        .send(invalidBody)
        .set('Content-Type', 'application/json')
        .expect(422)
    });

    test('error response aditional field - schema error - status 422', async () => {
        const invalidBody: any = clone(body);
        invalidBody.aaaaa = 'abcd'; // aditional field inn the request
        (saveCreditCard as any) = jest
            .fn()
            .mockReturnValue(saveCardResponse);
        await (request(server) as any)
        .post('/creditcard/verify')
        .send(invalidBody)
        .set('Content-Type', 'application/json')
        .expect(422)
    });

    test('response schema validation - schema error - status 422', async () => {
        const invalidBody: any = clone(body);
        invalidBody.aaaaa = 'abcd'; // aditional field inn the request
        (saveCardResponse as any).type = 'xyz';
        (saveCreditCard as any) = jest
            .fn()
            .mockReturnValue(saveCardResponse);
        await (request(server) as any)
        .post('/creditcard/verify')
        .send(invalidBody)
        .set('Content-Type', 'application/json')
        .expect(422)
    });
});