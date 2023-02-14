export async function up(sql) {
  await sql`
  CREATE TABLE collection (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  description varchar(500) NOT NULL,
  price varchar(10) NOT NULL
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE collection
  `;
}
