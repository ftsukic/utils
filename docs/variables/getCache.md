[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / getCache

# Variable: getCache

> `const` **getCache**: () => `object`

Defined in: [storage/index.ts:18](https://github.com/ftsukic/utils/blob/main/src/storage/index.ts#L18)

## Returns

`object`

### clear

> **clear**: () => `void`

#### Returns

`void`

### generate

> **generate**: \<`T`\>(`key`) => `object`

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

#### Returns

`object`

##### getItem

> **getItem**: (`defaultVal?`) => `T`

###### Parameters

###### defaultVal?

`Partial`\<`T`\>

###### Returns

`T`

##### removeItem

> **removeItem**: () => `void`

###### Returns

`void`

##### setItem

> **setItem**: (`val`) => `T`

###### Parameters

###### val

`T`

###### Returns

`T`

##### updateItem

> **updateItem**: (`val`) => `T`

###### Parameters

###### val

`Partial`\<`T`\>

###### Returns

`T`

### getItem

> **getItem**: \<`T`\>(`key`, `defaultVal`) => `T`

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

##### defaultVal?

`Partial`\<`T`\> \| `null`

#### Returns

`T`

### removeItem

> **removeItem**: (`key`) => `void`

#### Parameters

##### key

`string`

#### Returns

`void`

### setItem

> **setItem**: \<`T`\>(`key`, `val`) => `T`

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

##### val

`T`

#### Returns

`T`

### updateItem

> **updateItem**: \<`T`\>(`key`, `val`) => `T`

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

##### val

`Partial`\<`T`\>

#### Returns

`T`
