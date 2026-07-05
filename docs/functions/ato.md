[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / ato

# Function: ato()

## Call Signature

> **ato**\<`T`, `K`\>(`options`, `labelKey`): `Record`\<`T`\[`K`\], `T`\>

Defined in: [ato.ts:12](https://github.com/ftsukic/utils/blob/main/src/ato.ts#L12)

数组转换称对象
const options = [
 {label: '男', value: '1'}
 {label: '女', value: '2'}
]
const res = ato(options, 'value')
res = { '1': {label: '男', value: '1'}, '2': {label: '女', value: '2'} }
const res = ato(options, 'value', 'label')
res = { '1': '男', '2': '女' }

### Type Parameters

#### T

`T` *extends* `Record`\<`string`, `any`\>

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### options

readonly `T`[]

#### labelKey

`K`

### Returns

`Record`\<`T`\[`K`\], `T`\>

## Call Signature

> **ato**\<`T`, `K`, `V`\>(`options`, `labelKey`, `valueKey`): `Record`\<`T`\[`K`\], `T`\[`V`\]\>

Defined in: [ato.ts:16](https://github.com/ftsukic/utils/blob/main/src/ato.ts#L16)

数组转换称对象
const options = [
 {label: '男', value: '1'}
 {label: '女', value: '2'}
]
const res = ato(options, 'value')
res = { '1': {label: '男', value: '1'}, '2': {label: '女', value: '2'} }
const res = ato(options, 'value', 'label')
res = { '1': '男', '2': '女' }

### Type Parameters

#### T

`T` *extends* `Record`\<`string`, `any`\>

#### K

`K` *extends* `string` \| `number` \| `symbol`

#### V

`V` *extends* `string` \| `number` \| `symbol`

### Parameters

#### options

readonly `T`[]

#### labelKey

`K`

#### valueKey

`V`

### Returns

`Record`\<`T`\[`K`\], `T`\[`V`\]\>
