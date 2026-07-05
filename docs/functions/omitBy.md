[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / omitBy

# Function: omitBy()

> **omitBy**\<`T`\>(`object`, `predicate`): `Partial`\<`T`\>

Defined in: [omitBy.ts:6](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/omitBy.ts#L6)

const object = { 'a': 1, 'b': '2', 'c': 3 };
omitBy(object, isNumber);
=> { 'b': '2' }

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

## Parameters

### object

`T`

### predicate

(`value`, `key`) => `boolean`

## Returns

`Partial`\<`T`\>
