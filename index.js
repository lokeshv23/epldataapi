var express = require('express');
const oracledb = require('oracledb');
//oracledb.initOracleClient({libDir: 'C:\\Users\\305653\\Documents\\instantclient-basic-windows.x64-19.12.0.0.0dbru\\instantclient_19_12'})

var app = express();

app.use ('/hello',function (req, res) {  
    res.send('Welcome to lv23 EPL Data API!!');  
});

/*
app.get ('/getDBInfo',function (req, res,next) {
    (async() => {
        try {
            conn = await oracledb.getConnection({user:"ADMIN", password : "H0wrahbr1dge", connectionString: "lv23db_low"});
            const result = await conn.execute('select SYS_CONTEXT (\'USERENV\', \'DB_NAME\') DB_NAME, SYSDATE FROM DUAL',
            [], {outFormat: oracledb.OBJECT});
            res.json({
                "message":"success",
                "data": result.rows
            })
        }
        catch (err) { console.log(err); res.json({ "message":"failure"}) }
        finally { if(conn)  await conn.close(); }
    })();
});

app.get ('/getManUInfo',function (req, res,next) {
    (async() => {
        try {
            conn = await oracledb.getConnection({user:"ADMIN", password : "H0wrahbr1dge", connectionString: "lv23db_low"});
            const result = await conn.execute('select date_rw, hometeam, awayteam, ftr FROM EPL_FINAL_DATASET where hometeam like \'%Man United%\' or awayteam like \'%Man United%\'',
            [], {outFormat: oracledb.OBJECT});
            res.json({
                "message":"success",
                "data": result.rows
            })
        }
        catch (err) { console.log(err); res.json({ "message":"failure"}) }
        finally { if(conn)  await conn.close(); }
    })();
});*/

app.use ('/',function (req, res) {  
    res.send('Welcome to lv23 EPL Data API!!!');  
});

async function getDBInfo() {

}

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);

