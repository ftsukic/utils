[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / throttleTrailing

# Function: throttleTrailing()

> **throttleTrailing**\<`T`\>(`fn`, `ms`): (`this`, ...`args`) => `void`

Defined in: [throttle.ts:24](https://github.com/ftsukic/utils/blob/main/src/throttle.ts#L24)

节流函数，定时器模式
减少事件执行次数，有规律的执行，事件触发后延迟执行

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### fn

`T`

### ms

`number`

## Returns

(`this`, ...`args`) => `void`
