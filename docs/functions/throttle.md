[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`fn`, `ms`, `mode?`): (`this`, ...`args`) => `void`

Defined in: [throttle.ts:46](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/throttle.ts#L46)

节流函数
减少事件执行次数，有规律的执行

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### fn

`T`

### ms

`number`

### mode?

`"leading"` \| `"trailing"`

## Returns

(`this`, ...`args`) => `void`
