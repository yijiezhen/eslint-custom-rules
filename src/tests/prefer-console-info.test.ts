import { ruleTesterTs } from '../utils/ruleTester';
import { preferConsoleInfo } from '../rules/prefer-console-info';

ruleTesterTs.run('prefer-console-info', preferConsoleInfo, {
  valid: [
    {
      code: 'console.info("hello world");',
    },
    {
      code: 'console.error("error message");',
    },
    {
      code: 'console.warn("warning message");',
    },
    {
      code: 'console.debug("debug message");',
    },
    {
      code: 'console.trace("trace message");',
    },
    {
      code: 'console.table(data);',
    },
    {
      code: 'console.dir(object);',
    },
    {
      code: 'console.time("timer");',
    },
    {
      code: 'console.timeEnd("timer");',
    },
    {
      code: 'console.group("group");',
    },
    {
      code: 'console.groupEnd();',
    },
    {
      code: 'console.clear();',
    },
    {
      code: 'console.count("counter");',
    },
    {
      code: 'console.countReset("counter");',
    },
    {
      code: 'console.assert(condition, "message");',
    },
    {
      code: 'logger.log("hello world");',
    },
    {
      code: 'const log = console.log; log("hello world");',
    },
    {
      code: 'const { log } = console; log("hello world");',
    },
    {
      code: 'const myConsole = { log: () => {} }; myConsole.log("hello world");',
    },
    {
      code: 'window.console.info("hello world");',
    },
  ],
  invalid: [
    {
      code: 'console.log("hello world");',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info("hello world");',
    },
    {
      code: 'console.log("hello", "world");',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info("hello", "world");',
    },
    {
      code: 'console.log(1, 2, 3);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(1, 2, 3);',
    },
    {
      code: 'console.log(`template literal`);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(`template literal`);',
    },
    {
      code: 'console.log(`template ${literal}`);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(`template ${literal}`);',
    },
    {
      code: 'console.log(variable);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(variable);',
    },
    {
      code: 'console.log(obj.property);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(obj.property);',
    },
    {
      code: 'console.log(arr[0]);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(arr[0]);',
    },
    {
      code: 'console.log(func());',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(func());',
    },
    {
      code: 'console.log(...args);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(...args);',
    },
    {
      code: 'console.log({ a: 1, b: 2 });',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info({ a: 1, b: 2 });',
    },
    {
      code: 'console.log([1, 2, 3]);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info([1, 2, 3]);',
    },
    {
      code: 'console.log(a ? b : c);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a ? b : c);',
    },
    {
      code: 'console.log(a || b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a || b);',
    },
    {
      code: 'console.log(a && b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a && b);',
    },
    {
      code: 'console.log(a + b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a + b);',
    },
    {
      code: 'console.log(a - b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a - b);',
    },
    {
      code: 'console.log(a * b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a * b);',
    },
    {
      code: 'console.log(a / b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a / b);',
    },
    {
      code: 'console.log(a % b);',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'console.info(a % b);',
    },
    {
      code: 'window.console.log("hello world");',
      errors: [{ messageId: 'preferConsoleInfo' }],
      output: 'window.console.info("hello world");',
    },
  ],
});