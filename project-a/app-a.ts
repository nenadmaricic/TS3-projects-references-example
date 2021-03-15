import { logProjectName, Test, TestInterface, TestInterface2, TestService } from '@test/common';

logProjectName("project-a");

const t: TestInterface = {
    b: 2
};
const t2: TestInterface2 = {
    c: true
};

const test = new Test();
console.log(test.getValue('1hdfghdfghd'));


const service = new TestService();
service.someMethod();