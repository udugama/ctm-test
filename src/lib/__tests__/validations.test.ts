import { validateCardNumber, checkCardNumberLength } from '../validations';
import { CardType } from './../verifyCard';

describe('checkCardNumberLength', () => {
    it('is a function', () => {
        expect(checkCardNumberLength).toBeInstanceOf(Function);
    });

    it('type validation successful - Visa', () => {
        const response = checkCardNumberLength(CardType.Visa, 4556817790531203);
        expect(response).toBeTruthy();
    });

    it('type validation successful - MasterCard', () => {
        const response = checkCardNumberLength(CardType.MasterCard, 5543887320990263);
        expect(response).toBeTruthy();
    });

    it('type validation successful - Discover', () => {
        const response = checkCardNumberLength(CardType.Discover, 6011534496785074);
        expect(response).toBeTruthy();
    });

    it('type validation successful - AMEX', () => {
        const response = checkCardNumberLength(CardType.AMEX, 376125387622408);
        expect(response).toBeTruthy();
    });

    it('type validation unsuccessful - Visa', () => {
        const response = checkCardNumberLength(CardType.Visa, 5556817790531203);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful - MasterCard', () => {
        const response = checkCardNumberLength(CardType.MasterCard, 4543887320990263);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful - Discover', () => {
        const response = checkCardNumberLength(CardType.Discover, 4011534496785074);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful - AMEX', () => {
        const response = checkCardNumberLength(CardType.AMEX, 316125387622408);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful (wrong length) - Visa', () => {
        const response = checkCardNumberLength(CardType.Visa, 45568177905312033);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful (wrong length) - MasterCard', () => {
        const response = checkCardNumberLength(CardType.MasterCard, 55438873209902633);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful (wrong length) - Discover', () => {
        const response = checkCardNumberLength(CardType.Discover, 60115344967850745);
        expect(response).toBeFalsy();
    });

    it('type validation unsuccessful (wrong length) - AMEX', () => {
        const response = checkCardNumberLength(CardType.AMEX, 3761253876224089);
        expect(response).toBeFalsy();
    });
});

describe('validateCardNumber', () => {
    it('is a function', () => {
        expect(validateCardNumber).toBeInstanceOf(Function);
    });

    it('card number validation successful', () => {
        const response = validateCardNumber(4408041234567893);
        expect(response).toBeTruthy();
    });

    it('card number validation unsuccessful', () => {
        const response = validateCardNumber(9908041234567893);
        expect(response).toBeFalsy();
    });
});