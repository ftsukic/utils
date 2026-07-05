[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / reserve

# Function: reserve()

> **reserve**(`val`, `defaultVal?`): `any`

Defined in: [reserve.ts:8](https://github.com/ftsukic/utils/blob/main/src/reserve.ts#L8)

值为 ''、undefined、null 则取默认值
解决：
0 || '--' => '--'
reserve(0, '--') => 0

## Parameters

### val

`any`

### defaultVal?

`any`

## Returns

`any`
