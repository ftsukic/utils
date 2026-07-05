[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / chooseMedia

# Function: chooseMedia()

> **chooseMedia**(`options?`): `Promise`\<`File`[]\>

Defined in: [chooseMedia.ts:5](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/chooseMedia.ts#L5)

创建 input 触发选择文件
因为 iOS 必须把 input 元素添加到 document 才会获取到文件，所以这里做了兼容处理

## Parameters

### options?

#### accept?

`string`

#### multiple?

`boolean`

## Returns

`Promise`\<`File`[]\>
