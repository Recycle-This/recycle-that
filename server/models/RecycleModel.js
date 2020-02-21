/**
 * the tables: 
 
CREATE TABLE "Users" (
	"user_id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"brownie_points" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Search" (
	"search_id" serial NOT NULL,
	"search_words" varchar(255) NOT NULL,
	"favorite_search" varchar(255) NOT NULL,
	"date_searched" TIMESTAMP NOT NULL,
	"url" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"user_id" integer NOT NULL,
	"count_searches" integer NOT NULL
) WITH (
  OIDS=FALSE
);

ALTER TABLE "Search" ADD CONSTRAINT "Search_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id");
 */


const { Pool } = require ('pg')

const pool = new Pool ({
    connectionString : 'postgres://fbaiumdg:nNH1m7fPJmnbE0QCZKMOSv49qXKndXhr@rajje.db.elephantsql.com:5432/fbaiumdg'
})

module.exports = {
    query : (text, values, callback) => {
        console.log('executed query', text, "values", values)
        return pool.query(text, values, callback)
    }
}