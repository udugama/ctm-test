import * as clone from 'lodash.clone';
import { CardType } from './verifyCard';

/**
 * Card type validation
 * 
 * @param type String
 * @param cardNumber Number
 */
// cardNumber type casted as any to avoid tslint error poerforming length function.
export const checkCardNumberLength: Function = (type: CardType, cardNumber: any) => {
    const cardNumberString: string = cardNumber.toString();
    const length: number = cardNumberString.length;

    switch(type){
        case CardType.Visa:
            if ((length === 13 || length === 16) && cardNumberString.startsWith('4')) {
                return true;
            }
            break;
        case CardType.MasterCard:
            let startWith: boolean = false;
            for (let i=51; i<56; i++) {
                if (cardNumberString.startsWith(i.toString())) {  startWith = true; }
            }
            if ((length === 16) && startWith) {
                return true;
            }
            break;
        case CardType.Discover:
            if ((length === 16) && cardNumberString.startsWith('6011')) {
                return true;
            }
            break;
        case CardType.AMEX:
            if (
                (length === 15) && 
                (cardNumberString.startsWith('34') || cardNumberString.startsWith('37'))
            ) {
                return true;
            }
            break;
    }

    return false;
};

/**
 * validate the card number
 * 
 * @param cardNumber number
 */
export const validateCardNumber: Function = (cardNumber: number) => {
    const cardNumberString: string = cardNumber.toString();
    const cardLength: number =  cardNumberString.length;
    const charArray: Array<number> = (cardNumberString as any).split('');

    let total: number = 0
    let numbersArray: Array<number> = charArray.map(Number);
    let doubledNumbers: Array<number> = [];
    let untouchedNumbers: Array<number> = clone(numbersArray);

    // double numbers and get the total
    for(let i=cardLength-2; i>=0; i=i-2) {
        let doubled: number = numbersArray[i] * 2;
        if (doubled > 9) {
            const sumChars: Array<string> = (doubled as any).toString().split('');
            const sumNumbers = sumChars.map(Number);
            let sum = 0;
            sumNumbers.forEach((number) => {
                sum  = sum + number;
            })
            doubled = sum;
        }
        untouchedNumbers.splice(i, 1);
        doubledNumbers.push(doubled);
    }

    doubledNumbers.forEach((value) => total = total + value);
    untouchedNumbers.forEach((value) => total = total + value);
    
    const final = total % 10;
    if ( final === 0) {
        return true;
    }

    return false;
};
