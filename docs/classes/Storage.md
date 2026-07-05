[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / Storage

# Class: Storage\<T\>

Defined in: [storage/storage.ts:18](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L18)

## Type Parameters

### T

`T` = `any`

## Constructors

### Constructor

> **new Storage**\<`T`\>(`key`, `storage`, `options?`): `Storage`\<`T`\>

Defined in: [storage/storage.ts:24](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L24)

#### Parameters

##### key

`string`

##### storage

`StorageLike`

##### options?

`Partial`\<`StorageOptions`\<`T`\>\>

#### Returns

`Storage`\<`T`\>

## Methods

### \_debug()

> **\_debug**(...`args`): `void`

Defined in: [storage/storage.ts:43](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L43)

#### Parameters

##### args

...`string`[]

#### Returns

`void`

***

### clearCache()

> **clearCache**(): `void`

Defined in: [storage/storage.ts:137](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L137)

清除缓存

#### Returns

`void`

***

### getItem()

#### Call Signature

> **getItem**(): `T` \| `null`

Defined in: [storage/storage.ts:65](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L65)

获取值

##### Returns

`T` \| `null`

#### Call Signature

> **getItem**(`defaultVal`): `T`

Defined in: [storage/storage.ts:66](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L66)

获取值

##### Parameters

###### defaultVal

`DefaultVal`\<`T`\>

##### Returns

`T`

***

### getItemOnce()

#### Call Signature

> **getItemOnce**(): `T` \| `null`

Defined in: [storage/storage.ts:102](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L102)

获取值后，删除存储的值

##### Returns

`T` \| `null`

#### Call Signature

> **getItemOnce**(`defaultVal`): `T`

Defined in: [storage/storage.ts:103](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L103)

获取值后，删除存储的值

##### Parameters

###### defaultVal

`DefaultVal`\<`T`\>

##### Returns

`T`

***

### getItemWithCache()

#### Call Signature

> **getItemWithCache**(): `T` \| `null`

Defined in: [storage/storage.ts:115](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L115)

优先从缓存中获取值

##### Returns

`T` \| `null`

#### Call Signature

> **getItemWithCache**(`defaultVal`): `T`

Defined in: [storage/storage.ts:116](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L116)

优先从缓存中获取值

##### Parameters

###### defaultVal

`DefaultVal`\<`T`\>

##### Returns

`T`

***

### removeItem()

> **removeItem**(): `void`

Defined in: [storage/storage.ts:78](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L78)

删除值

#### Returns

`void`

***

### setItem()

> **setItem**(`val`): `T`

Defined in: [storage/storage.ts:52](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L52)

设置值

#### Parameters

##### val

`T`

#### Returns

`T`

***

### updateItem()

> **updateItem**(`val`): `T`

Defined in: [storage/storage.ts:86](https://github.com/ftsukic/utils/blob/main/src/storage/storage.ts#L86)

更新值

#### Parameters

##### val

`DefaultVal`\<`T`\>

#### Returns

`T`
