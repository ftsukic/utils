[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / createWithLoading

# Function: createWithLoading()

> **createWithLoading**\<`O`\>(`showLoading`, `defaultOptions?`): \<`T`\>(`fn`, `options`) => (...`params`) => `Promise`\<`Awaited`\<`ReturnType`\<`T`\>\>\>

Defined in: [createWithLoading.ts:11](https://github.com/ftsukic/utils/blob/main/src/createWithLoading.ts#L11)

loading 生成器
const withLoading = createWithLoading(() => showLoading())
const fn = withLoading(async () => { // ... })
fn() 执行的时候就会执行showLoading

## Type Parameters

### O

`O` = `any`

## Parameters

### showLoading

(`options`) => `Loose`\<\{ `close`: () => `any`; \}\>

### defaultOptions?

`O`

## Returns

\<`T`\>(`fn`, `options`) => (...`params`) => `Promise`\<`Awaited`\<`ReturnType`\<`T`\>\>\>
