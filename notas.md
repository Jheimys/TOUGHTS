##1.Pacotes

**1**. bcryptjs
**2**. cookie-parser
**3**. cookie-session
**4**. express
**5**. express-flah
**6**. express-handlebars
**7**. express-session
**8**. mysql2
**9**. sequelize
**10**. nodemon
**11**. session-file-store
**12**. connect-flash

#2.Criação das pastas

**1**. MVC
**2**. db
**3**. public
**4**. routes
**5**. session

#3. Importando os pacotes para o index.js

```js
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const app = express();
```
