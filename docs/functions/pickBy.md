[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / pickBy

# Function: pickBy()

> **pickBy**\<`T`\>(`object`, `predicate`): `Partial`\<`T`\>

Defined in: [pickBy.ts:6](https://github.com/ftsukic/utils/blob/main/src/pickBy.ts#L6)

const object = { 'a': 1, 'b': '2', 'c': 3 };
pickBy(object, isNumber);
=> { 'a': 1, 'c': 3 }

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
