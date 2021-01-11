const mongoose = require('mongoose');

//连接数据
mongoose.connect('mongodb://localhost:27888/playground', { useNewUrlParser: true })
        .then(() => console.log('数据库连接成功'))
        .catch(() => console.log('数据库连接失败'))

        // { useNewUrlParser: true },