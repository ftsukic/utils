[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / formatMessage

# Function: formatMessage()

> **formatMessage**(`message`, `keys?`): `string`

Defined in: [formatMessage.ts:11](https://github.com/ftsukic/utils/blob/main/src/formatMessage.ts#L11)

格式化消息
formatMessage({ a: '123', b: { ba: '456' } }, ['a']) => '123'
formatMessage({ a: '123', b: { ba: '456' } }, ['b.ba']) => '456'

## Parameters

### message

`unknown`

### keys?

`string`[] = `...`

## Returns

`string`
