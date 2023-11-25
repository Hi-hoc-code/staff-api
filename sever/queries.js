// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'staff',
//   password: 'mysecretpassword',
//   port: 5432,
// })

// module.exports = {pool}

const Pool = require('pg').Pool
const pool = new Pool({
    connectionString:'postgresql://Hi-hoc-code:IeAo42GHciEx@ep-lucky-voice-99485450-pooler.ap-southeast-1.aws.neon.tech/staff?sslmode=require',
      ssl: {
        require: true,
      },
})
module.exports = {pool}
