[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / filterEmptyValue

# Function: filterEmptyValue()

> **filterEmptyValue**(`obj`, `expand?`): `Record`\<`string`, `any`\>

Defined in: [filterEmptyValue.ts:12](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/filterEmptyValue.ts#L12)

过滤对象的 undefined null '' 属性，返回一个新对象

## Parameters

### obj

`Record`\<`string`, `any`\>

需要过滤的对象

### expand?

`boolean` \| ((`key`, `value`) => `boolean`)

如果是传的是布尔类型 true， 则还会过滤空数组、空对象的情况

## Returns

`Record`\<`string`, `any`\>
