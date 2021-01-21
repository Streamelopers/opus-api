# Requerimientos

## Endpoints (V1)

### CompanyController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/|GET| |
|GetById|id|/{id}|GET| |
|Delete|id|/{id}|DELETE| |
|Create|name,website,description,userid,pictureid|/|POST| |
|Update|id,name,website,description,userid,pictureid|/{id}|PUT| |

### CurrencyController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/currency|GET| |
|GetById|id|/currency/{id}|GET| |
|Delete|id|/currency/{id}|DELETE| |
|Create|name|/currency|POST| |
|Update|id,name|/currency/{id}|PUT| |

### JobController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/job|GET| |
|GetById|id|/job/{id}|GET| |
|Delete|id|/job/{id}|DELETE| |
|Create|Job, Location|/job/|POST| |
|Update|Job, Location|/job/{id}|PUT| |

### JobTypeController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/jobtype|GET| |
|GetById|id|/jobtype/{id}|GET| |
|Delete|id|/jobtype/{id}|DELETE| |
|Create|name|/jobtype/|POST| |
|Update|id,name|/jobtype/{id}|PUT| |

### LevelController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/level|GET| |
|GetById|id|/level/{id}|GET| |
|Delete|id|/level/{id}|DELETE| |
|Create|name|/level/|POST| |
|Update|id,name|/level/{id}|PUT| |

### Location

- No lleva controller

### PictureController
No hay que hacerlo ahora mismo
|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/picture|GET| |
|GetById|id|/picture/{id}|GET| |
|Delete|id|/picture/{id}|DELETE| |
|Create|filename,data|/picture/|POST| |
|Update|id,name|/picture/{id}|PUT| |

### TagController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|GetPage|page,pageSize|/tag|GET| |
|GetById|id|/tag/{id}|GET| |
|Delete|id|/tag/{id}|DELETE| |
|Create|name|/tag/|POST| |
|Update|id,name|/tag/{id}|PUT| |

### UserController

|Método|Parámetros|Ruta|Verbo|Status|
|---|---|---|---|---|
|Login|email,password|/user/login|POST|✅ |
|SignOn|name,email,password|/user/signon|POST|🚶‍♂️|
|GetPage|page,pageSize|/user|GET| |
|GetById|id|/user/{d}|GET| |
|Create|name,email,password|/user|POST| |
|Update|id,name,email,password|/user/{id}|PUT| |
|Delete|id|/user/{id}|DELETE| |
