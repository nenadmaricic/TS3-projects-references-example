
export class Test {
    constructor() {        
    }

    public getValue(input: string): string {
        return (input || '') + '-sufix';
    }
}