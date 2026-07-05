[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / isAmount

# Function: isAmount()

> **isAmount**(`val`): `boolean`

Defined in: [isAmount.ts:11](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/isAmount.ts#L11)

判断是否是合法金额
只能是数字,小数点后只能保留两位或一位
isAmount(0) => true
isAmount('01') => false
isAmount('1.') => true
isAmount('1.1') => true
isAmount('1.12') => true
isAmount('1.123') => false

## Parameters

### val

`string`

## Returns

`boolean`
