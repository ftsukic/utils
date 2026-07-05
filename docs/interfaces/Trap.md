[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / Trap

# Interface: Trap

Defined in: [trap.ts:7](https://github.com/ftsukic/utils/blob/main/src/trap.ts#L7)

陷阱圈套
主要用于缓存页面下、执行触发

## Properties

### clear

> **clear**: () => `void`

Defined in: [trap.ts:12](https://github.com/ftsukic/utils/blob/main/src/trap.ts#L12)

#### Returns

`void`

***

### create

> **create**: (`id`, `cb`) => `void`

Defined in: [trap.ts:10](https://github.com/ftsukic/utils/blob/main/src/trap.ts#L10)

#### Parameters

##### id

`string`

##### cb

(...`args`) => `any`

#### Returns

`void`

***

### delete

> **delete**: (`id`) => `void`

Defined in: [trap.ts:11](https://github.com/ftsukic/utils/blob/main/src/trap.ts#L11)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### list

> **list**: `Record`\<`string`, `any`\>

Defined in: [trap.ts:8](https://github.com/ftsukic/utils/blob/main/src/trap.ts#L8)

***

### trigger

> **trigger**: (`id`, `data?`) => `void`

Defined in: [trap.ts:9](https://github.com/ftsukic/utils/blob/main/src/trap.ts#L9)

#### Parameters

##### id

`string`

##### data?

`any`

#### Returns

`void`
