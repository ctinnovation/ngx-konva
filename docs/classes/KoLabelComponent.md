[ngx-konva](../README.md) / [Exports](../modules.md) / KoLabelComponent

# Class: KoLabelComponent

## Hierarchy

- `KoNestable`

  ↳ **`KoLabelComponent`**

## Implements

- `OnInit`

## Table of contents

### Constructors

- [constructor](KoLabelComponent.md#constructor)

### Properties

- [\_config](KoLabelComponent.md#_config)
- [\_tagConfig](KoLabelComponent.md#_tagconfig)
- [\_textConfig](KoLabelComponent.md#_textconfig)
- [afterUpdate](KoLabelComponent.md#afterupdate)
- [beforeUpdate](KoLabelComponent.md#beforeupdate)
- [centerOrigin](KoLabelComponent.md#centerorigin)
- [id](KoLabelComponent.md#id)
- [node](KoLabelComponent.md#node)
- [tag](KoLabelComponent.md#tag)
- [text](KoLabelComponent.md#text)

### Accessors

- [config](KoLabelComponent.md#config)
- [tagConfig](KoLabelComponent.md#tagconfig)
- [tagDisabled](KoLabelComponent.md#tagdisabled)
- [textConfig](KoLabelComponent.md#textconfig)
- [textDisabled](KoLabelComponent.md#textdisabled)

### Methods

- [\_afterRender](KoLabelComponent.md#_afterrender)
- [\_beforeRender](KoLabelComponent.md#_beforerender)
- [getKoItem](KoLabelComponent.md#getkoitem)
- [ngOnDestroy](KoLabelComponent.md#ngondestroy)
- [ngOnInit](KoLabelComponent.md#ngoninit)
- [updateLabel](KoLabelComponent.md#updatelabel)
- [updateTag](KoLabelComponent.md#updatetag)
- [updateText](KoLabelComponent.md#updatetext)

## Constructors

### constructor

• **new KoLabelComponent**()

#### Overrides

KoNestable.constructor

#### Defined in

[lib/components/ko-label.component.ts:69](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L69)

## Properties

### \_config

• `Private` **\_config**: `LabelConfig` = `{}`

#### Defined in

[lib/components/ko-label.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L20)

___

### \_tagConfig

• `Private` **\_tagConfig**: `TagConfig` = `{}`

#### Defined in

[lib/components/ko-label.component.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L35)

___

### \_textConfig

• `Private` **\_textConfig**: `TextConfig` = `{}`

#### Defined in

[lib/components/ko-label.component.ts:28](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L28)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Label`\>

#### Defined in

[lib/components/ko-label.component.ts:67](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L67)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Label`\>

#### Defined in

[lib/components/ko-label.component.ts:64](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L64)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[lib/components/ko-label.component.ts:61](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L61)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/common/ko-nestable.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L13)

___

### node

• **node**: `Label`

#### Defined in

[lib/components/ko-label.component.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L16)

___

### tag

• `Optional` **tag**: `Tag`

#### Defined in

[lib/components/ko-label.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L18)

___

### text

• `Optional` **text**: `Text`

#### Defined in

[lib/components/ko-label.component.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L17)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `LabelConfig` |

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L22)

___

### tagConfig

• `set` **tagConfig**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `TagConfig` |

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L37)

___

### tagDisabled

• `set` **tagDisabled**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L43)

___

### textConfig

• `set` **textConfig**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `TextConfig` |

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:30](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L30)

___

### textDisabled

• `set` **textDisabled**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:52](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L52)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:115](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L115)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:111](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L111)

___

### getKoItem

▸ **getKoItem**(): `Label`

#### Returns

`Label`

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/components/ko-label.component.ts:85](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L85)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Overrides

KoNestable.ngOnDestroy

#### Defined in

[lib/components/ko-label.component.ts:81](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L81)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Inherited from

KoNestable.ngOnInit

#### Defined in

[lib/common/ko-nestable.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L19)

___

### updateLabel

▸ `Private` **updateLabel**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:97](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L97)

___

### updateTag

▸ `Private` **updateTag**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:103](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L103)

___

### updateText

▸ `Private` **updateText**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-label.component.ts:89](https://github.com/giovanni-bertoncelli/ngx-konva/blob/2de20a6/projects/ngx-konva/src/lib/components/ko-label.component.ts#L89)
