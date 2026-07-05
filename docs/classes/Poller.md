[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / Poller

# Class: Poller

Defined in: [poller.ts:13](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/poller.ts#L13)

## Constructors

### Constructor

> **new Poller**(`task`, `options?`): `Poller`

Defined in: [poller.ts:23](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/poller.ts#L23)

#### Parameters

##### task

[`PollerTask`](../type-aliases/PollerTask.md)

##### options?

`Partial`\<[`PollerOptions`](../interfaces/PollerOptions.md)\> = `{}`

#### Returns

`Poller`

## Accessors

### isRunning

#### Get Signature

> **get** **isRunning**(): `boolean`

Defined in: [poller.ts:19](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/poller.ts#L19)

##### Returns

`boolean`

## Methods

### start()

> **start**(`forceUpdate?`): `Poller`

Defined in: [poller.ts:46](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/poller.ts#L46)

#### Parameters

##### forceUpdate?

`boolean` = `true`

#### Returns

`Poller`

***

### stop()

> **stop**(): `Poller`

Defined in: [poller.ts:41](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/poller.ts#L41)

#### Returns

`Poller`
