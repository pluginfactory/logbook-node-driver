# logbook-node-driver

This plugin is a wrapper driver for [logbook](https://hub.docker.com/r/pluginfactory/logbook) Pluggable Realtime logging interface. This acts as a connection medium between your nodejs application and logbook docker to handle realtime application logs. The logbook is distributed as docker image and you can see how to configure it by going through the official documentation. You can support the developer by giving star to the repository or by contributing on [Github](https://github.com/pluginfactory/logbook).


## Installation
```
npm install --save @pluginfactory/logbook-node-driver
```

## Usage Example
#### With ES5
```javascript

const LogbookDriver = require('@pluginfactory/logbook-node-driver').LogbookDriver;

const logger = new LogbookDriver('http://localhost:49100');

logger.log('application started');

```

#### with ES6
```javascript
import { LogbookDriver } from '@pluginfactory/logbook-node-driver';

const logger = new LogbookDriver('http://localhost:49100');

logger.log('application started');

```

This will display the Realtime log on the logbook dashboard available at _&lt;HOST&gt;:49100_

#### Output
![logbook-demo](https://i.ibb.co/dW4152r/Screenshot-2019-03-07-at-12-59-21-AM.png)

## Reference
- [Logbook Docker](https://hub.docker.com/r/pluginfactory/logbook)
- [Logbook NodeJS Driver](https://www.npmjs.com/package/@pluginfactory/logbook-node-driver)