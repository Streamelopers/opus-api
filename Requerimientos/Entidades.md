# Requerimientos

## Entidades

El nombre de las tablas debe estar en plural, por ejemplo: Users, Currencies, Companies, ...

### Company ✅

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| UpdatedAt | DateTime | Not null|
| DeletedAt | DateTime | Nullable|
| IsActive | boolean | Not null |
| Name | varchar(255) | Not null |
| Website | varchar(255) | Not null |
| Description | varchar(8000) | Not null |
| UserId | int | Not null |
| PictureId | int | Not null |

### Currency

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| UpdatedAt | DateTime | Not null|
| DeletedAt | DateTime | Nullable|
| IsActive | Boolean | Not null |
| Name | varchar(255) | Not null |
| Symbol | varchar(10) | Not null |
| ISOCode | varchar(10) | Not null |

### Job

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| UpdatedAt | DateTime | Not null|
| DeletedAt | DateTime | Nullable|
| IsActive | Boolean | Not null |
| LocationId | int | Not null |
| CompanyId | int | Not null |
| UserId | int | Not null |
| CurrencyId | int | Nullable |
| PaymentTypeId | int | Nullable |
| JobTypeId | int | Not null |
| LevelId | int | Not null |
| Description | varchar(8000) | Not null |
| HowToApply | varchar(8000) | Not null |
| MinSalary | double | Nullable |
| MaxSalary | double | Nullable |
| IsRemote | Boolean | Not null |
| IsRemoteOnly | Boolean | Not null |

### JobType

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null |
| UpdatedAt | DateTime | Not null |
| DeletedAt | DateTime | Nullable |
| IsActive | Boolean | Not null |
| Name | varchar(255) | Not null |

### Level

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| UpdatedAt | DateTime | Not null|
| DeletedAt | DateTime | Nullable|
| IsActive | Boolean | Not null |
| Name | varchar(255) | Not null |

### Location

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null |
| UpdatedAt | DateTime | Not null |
| DeletedAt | DateTime | Nullable |
| IsActive | Boolean | Not null |
| PlaceId | varchar(8000) | Not null |
| Name | varchar(8000) | Not null |
| Latitude | varchar(8000) | Not null |
| Longitude | varchar(8000) | Not null |

### User ✅

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null |
| UpdatedAt | DateTime | Not null |
| DeletedAt | DateTime | Nullable |
| IsActive | Boolean | Not null |
| Name | varchar(255) | Not null|
| Email | varchar(255) | Not null|
| Password | varchar(255) | Not null|

### PaymentType

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| UpdatedAt | DateTime | Not null|
| DeletedAt | DateTime | Nullable|
| IsActive | Boolean | Not null |
| Name | varchar(255) | Not null |

### Picture
TODO: NO hay que implementar ahora mismo

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null |
| UpdatedAt | DateTime | Not null |
| DeletedAt | DateTime | Nullable |
| IsActive | Boolean | Not Null |
| FileName | varchar(255) | Not null |
| Data | byte array(MAX) | Not null |

### Tag

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null |
| UpdatedAt | DateTime | Not null |
| DeletedAt | DateTime | Nullable |
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null |