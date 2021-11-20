const mysql = require('mysql');

let conn = mysql.createConnection({
    host:'35.223.216.61',
    user: 'root',
    password:'sali242',
    database:'ScheduleDB'
});

conn.connect();

conn.query(`Drop Table Product`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )
conn.query(`CREATE TABLE Product
            (
                Name varchar(100),
                Price   boolean
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })
// {"desc":"Table","price":"200","imgPath":"/imgs/Table.jpg"}
conn.query( `insert into Product values ("Table",200,"/imgs/Table.jpg")`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });

conn.query( `select * from Product `
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
                for (r of rows)
                    console.log(r);
            });

conn.end();