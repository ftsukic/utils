[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / parseObject

# Function: parseObject()

> **parseObject**\<`T`\>(`path`, `value`): `T`

Defined in: [parseObject.ts:5](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/parseObject.ts#L5)

返回对象
parseObject('a.b.c', 1) => { a: { b: { c: 1 } } }

## Type Parameters

### T

`T` = `Record`\<`string`, `any`\>

## Parameters

### path

`string`

### value

`any`

## Returns

`T`
