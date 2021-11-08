/* Initialisiert die Datenbank, wird aus sqlite3 heraus geladen mit:
.read initialize_shop.sql
*/

create table produkte(
    id integer primary key autoincrement,
    name text not null,
    preis numeric
);

insert into produkte (name,preis) values("usb-stick",19.99);
insert into produkte (name,preis) values("Festplatte",89.99);
insert into produkte (name,preis) values("Mauspad",6.99);