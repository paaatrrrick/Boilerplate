import crypto from 'crypto';

export function randomStringToHash24Bits(inputString: string): string {
    return crypto.createHash('sha256').update(inputString).digest('hex').substring(0, 24);
}