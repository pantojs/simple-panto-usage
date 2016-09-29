/**
  * Copyright (C) 2016 pantojs.xyz
  * pantofile.js
  *
  * changelog
  * 2016-09-29[09:50:22]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
module.exports = panto => {
    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.setOptions({
        cwd: __dirname,
        src: 'src',
        output: 'output'
    });

    panto.pick('*.less').read().less().write();
    panto.rest().copy();
};