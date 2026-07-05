[**@ftsukic/utils**](../README.md)

***

[@ftsukic/utils](../globals.md) / eventBus

# Variable: eventBus

> `const` **eventBus**: `object`

Defined in: [eventBus.ts:38](https://github.com/ftsukic/utils/blob/499504eb170bf2e178626d12b1bfa3fa0a89e3e2/src/eventBus.ts#L38)

## Type Declaration

### clear

> **clear**: (`eventName?`) => `void`

#### Parameters

##### eventName?

`string`

#### Returns

`void`

### emit

> **emit**: (`eventName`, ...`args`) => `void`

#### Parameters

##### eventName

`string`

##### args

...`any`[]

#### Returns

`void`

### off

> **off**: (`eventName`, `callback`) => `void`

#### Parameters

##### eventName

`string`

##### callback

[`EventBusCallback`](../interfaces/EventBusCallback.md)

#### Returns

`void`

### on

> **on**: (`eventName`, `callback`) => () => `void`

#### Parameters

##### eventName

`string`

##### callback

[`EventBusCallback`](../interfaces/EventBusCallback.md)

#### Returns

() => `void`
