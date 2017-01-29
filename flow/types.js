// @flow

/**
 * SERVER
 */

declare type vrtest$Config = {
  tests: Array<string>,
  scripts?: Array<string>,
  storage: {
    baseline: string,
    output: string,
  },
  server: {
    port: number,
  },
  reporters: Array<(vrtest$Runner) => vrtest$Reporter>,
  profiles: Array<vrtest$Profile>,
};

declare type vrtest$Reporter = {};

declare type vrtest$Runner = {
  on(string, Function): events$EventEmitter,
  run(): Promise<null>,
};

declare type vrtest$Profile = {
  name: string,
  browser: string,
};

declare type vrtest$RunnerOptions = {
  profile: vrtest$Profile,
  interactive?: boolean,
  storage: vrtest$Storage,
};

declare type vrtest$Storage = {
  baseline: string,
  output: string,
};

// declare class vrtest$Storage {
//   constructor(profile?: vrtest$Profile): void;
//   getBaseline(test: string): Promise<any>;
//   writeBaseline(test: string): Promise<any>;
//   getResult(test: string): Promise<any>;
//   writeResult(test: string): Promise<any>;
// };

/**
 * CLIENT
 */

declare type vrtest$Client = {
  suites: Array<vrtest$Suite>,
  createSuite(name: string, options?: vrtest$SuiteOptions): vrtest$Suite,
  createTestController(): vrtest$TestController,
  testController: null | vrtest$TestController,
};

declare type vrtest$TestController = {
  start: () => vrtest$TestController,
  next: () => Promise<vrtest$TestController>,
  done: boolean,
  currentTest: null | vrtest$Test,
  generator: null | Generator<Promise<typeof undefined>, boolean, void>,
};

declare type vrtest$Suite = {
  name: string,
  options: vrtest$SuiteOptions,
  tests: Array<vrtest$Test>,
  createTest(string, Function): vrtest$Test,
};

declare type vrtest$SuiteOptions = {};

declare type vrtest$Test = {
  name: string,
  exec: (Document|Object) => Promise<any>,
};