# Requerimientos

## Entidades

El nombre de las tablas debe estar en plural, por ejemplo: Users, Currencies, Companies, ...

### Company

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | boolean | Not Null |
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
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null |
| Symbol | varchar(10) | Not null |
| ISOCode | varchar(10) | Not null |

### Job

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| LocationId | int | Not null |
| CompanyId | int | Not null |
| UserId | int | Not null |
| CurrencyId | int | Nullable |
| PaymentTypeId | int | Nullable |
| JobTypeId | int | Not null |
| LevelId | int | Not null |
| Description | varchar(8000) | Not null |
| HowToApply | varchar(8000) | Not null |
| MinSalary | varchar(8000) | Not null |
| MaxSalary | varchar(8000) | Not null |
| IsRemote | Boolean | Not Null |
| IsRemoteOnly | Boolean | Not Null |
| IsHighlighted | Boolean | Not Null |

### JobType

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null |

### Level

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null |

### Location

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| PlaceId | varchar(8000) | Not null |
| Name | varchar(8000) | Not null |
| Latitude | varchar(8000) | Not null |
| Longitude | varchar(8000) | Not null |

### User ✅

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null|
| Email | varchar(255) | Not null|
| Password | varchar(255) | Not null|

### PaymentType

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null |

### Picture

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| FileName | varchar(255) | Not null |
| Data | byte array(MAX) | Not null |

### Tag

| **Columna**| **Tipo** | **Características** |
|---|---|---|
| Id | int | identity, primary key, autoincrement, Not null|
| CreatedAt | DateTime | Not null|
| IsActive | Boolean | Not Null |
| Name | varchar(255) | Not null |