# Changelog

All notable changes to this project will be documented in this file.

[![CHANGELOG
FORMAT](https://img.shields.io/badge/Format-keepachangelog-orange.svg)](https://keepachangelog.com/en/1.0.0/) [![VERSIONING](https://img.shields.io/badge/Versioning-semver-red.svg)](https://semver.org/spec/v2.0.0.html)

- [[16.2.0] - 2024-07-01](#1620---2024-07-01)
- [[16.1.6] - 2024-03-18](#1616---2024-03-18)
- [[16.1.5] - 2024-03-07](#1615---2024-03-07)
- [[16.1.4] - 2024-03-07](#1614---2024-03-07)

## [16.2.0] - 2024-07-01

[![TASK](https://img.shields.io/badge/TASK-32-default.svg)](https://github.com/ctinnovation/ngx-konva/issues/32) 

### Changed

- [breaking] Core: use `ChangeDetectionStrategy.OnPush` for every library component ‧ [32](https://github.com/ctinnovation/ngx-konva/issues/32)
- Stage: debounce by 20ms batch drawing ‧ [32](https://github.com/ctinnovation/ngx-konva/issues/32)
- Layer: debounce by 10ms batch drawing ‧ [32](https://github.com/ctinnovation/ngx-konva/issues/32)
- [breaking] Shape: use `listening: false` as default. When shape is used with a `KoListeningDirective` only then set `listening: true`. ‧ [32](https://github.com/ctinnovation/ngx-konva/issues/32)
- [breaking] Shape: use `shadowForStrokeEnabled: false` and `hitStrokeWidth: 0` as default. ‧ [32](https://github.com/ctinnovation/ngx-konva/issues/32)
- [breaking] Shape: set pixel perfect drawing disabled by default ‧ [32](https://github.com/ctinnovation/ngx-konva/issues/32)
## [16.1.6] - 2024-03-18

[![TASK](https://img.shields.io/badge/TASK-28-default.svg)](https://github.com/ctinnovation/ngx-konva/issues/28) 

### Changed

- Bump `konva@9.3.6` ‧ [28](https://github.com/ctinnovation/ngx-konva/issues/28)

### Fixed

- Fixed isDragging error by importing `konva/lib/Core` inside `NgxKonvaModule` for initialization ‧ [28](https://github.com/ctinnovation/ngx-konva/issues/28)
## [16.1.5] - 2024-03-07


### Removed

- Removed `isEqual` comparison in config setter ‧ [BAC-926]()
## [16.1.4] - 2024-03-07


### Changed

- Improved config set for KoStage: ignore settings same configuration multiple times ‧ [BC-326]()
- Keeping `konva@9.2.3` as referenced stable version ‧ [BC-326]()
