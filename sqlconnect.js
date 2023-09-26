const sql = require('mssql/msnodesqlv8');

var dbConfig= {
    connectionTimeout : 30000,
    connectionString: 'Driver={SQL Server Native Client 11.0};Server=ertashatc;Database=deneme;Trusted_Connection=yes;',
    options: {
        
    }
};
(async () => {
    try {
        console.log("start");
        await sql.connect(dbConfig);  // both format of dbConfig or dbConfig2 will work
        const result = await sql.query(`select SYSDATETIME() as dt `);
        console.dir(result.recordset);
        console.log("end");
    } catch (err) {
        // 
        console.log(err);
    } finally {
        //
    }
})();
