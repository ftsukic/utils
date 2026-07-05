[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / StorageManager

# Interface: StorageManager\<T\>

Defined in: [storage/factory.ts:4](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/storage/factory.ts#L4)

## Type Parameters

### T

`T` = `any`

## Methods

### getItem()

> **getItem**(`defaultVal?`): `T`

Defined in: [storage/factory.ts:6](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/storage/factory.ts#L6)

#### Parameters

##### defaultVal?

`Partial`\<`T`\>

#### Returns

`T`

***

### removeItem()

> **removeItem**(): `void`

Defined in: [storage/factory.ts:7](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/storage/factory.ts#L7)

#### Returns

`void`

***

### setItem()

> **setItem**(`val`): `T`

Defined in: [storage/factory.ts:5](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/storage/factory.ts#L5)

#### Parameters

##### val

`T`

#### Returns

`T`

***

### updateItem()

> **updateItem**(`val`): `T`

Defined in: [storage/factory.ts:8](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/storage/factory.ts#L8)

#### Parameters

##### val

`Partial`\<`T`\>

#### Returns

`T`
