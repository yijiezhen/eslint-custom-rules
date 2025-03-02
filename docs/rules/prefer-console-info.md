# Enforce using console.info instead of console.log (prefer-console-info)

This rule enforces the use of `console.info()` instead of `console.log()` for better logging practices.

## Rule Details

`console.info` is a better version of `console.log` and should always be used. It provides the same functionality as `console.log` but with additional semantic meaning, indicating that the message is informational in nature.

Examples of **incorrect** code for this rule:

```js
console.log('hello world');
console.log('User logged in:', userId);
console.log(`Current temperature: ${temperature}°C`);
console.log({ name: 'John', age: 30 });
```

Examples of **correct** code for this rule:

```js
console.info('hello world');
console.info('User logged in:', userId);
console.info(`Current temperature: ${temperature}°C`);
console.info({ name: 'John', age: 30 });

// Other console methods are still allowed
console.error('An error occurred');
console.warn('This is a warning');
console.debug('Debug information');
```

## When Not To Use It

If you have a specific reason to use `console.log` instead of `console.info` in your codebase, you might want to disable this rule.

## Further Reading

- [MDN Web Docs: console.info()](https://developer.mozilla.org/en-US/docs/Web/API/console/info)
- [MDN Web Docs: console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console/log)