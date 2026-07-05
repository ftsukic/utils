[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / formatPathParams

# Function: formatPathParams()

> **formatPathParams**(`path`, `params?`): `object`

Defined in: [formatPathParams.ts:8](https://github.com/ftsukic/utils/blob/main/src/formatPathParams.ts#L8)

格式化字符串参数，一般用来处理 api path params
const url = 'api/v1/user/{id}'
const { path, rest } = formatPathParams(url, { id: 123, xxx: 1 })
path = 'api/v1/user/123'
rest = { xxx: 1 }

## Parameters

### path

`string`

### params?

`Record`\<`string`, `any`\> = `{}`

## Returns

`object`

### path

> **path**: `string`

### rest

> **rest**: `object`

#### Index Signature

\[`key`: `string`\]: `any`
