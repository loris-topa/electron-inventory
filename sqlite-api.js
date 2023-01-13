connection = null
api = {
	init: function () {
		connection = new sqlite3.Database("database.sqlite3")
	},
	install: function () {
		connection.run("CREATE TABLE product( id INTEGER NOT NULL PRIMARY KEY, description TEXT, image TEXT, seller_id INTEGER NOT NULL, FOREIGN KEY(seller_id) REFERENCES seller(id))");
		connection.run("CREATE TABLE seller( id INTEGER NOT NULL PRIMARY KEY, name TEXT, image TEXT)");
		connection.run("CREATE TABLE invoice( id INTEGER NOT NULL PRIMARY KEY, seller_id INTEGER NOT NULL, image TEXT, FOREIGN KEY(seller_id) REFERENCES seller(id))");
		connection.run("CREATE TABLE invoice_product( id INTEGER NOT NULL PRIMARY KEY, amount INTEGER NOT NULL, invoice_id INTEGER NOT NULL, product_id INTEGER NOT NULL, FOREIGN KEY(product_id) REFERENCES product(id), FOREIGN KEY(invoice_id) REFERENCES invoice(id))");
	},
	create_seller: function ($name) {
		return connection.run("INSERT INTO seller (name) VALUES (:name)", {$name});
	},
	create_product: function ($name) {
		return connection.run("INSERT INTO product (description) VALUES (:name)", {$name});
	},
	create_product: function ($name) {
		return connection.run("INSERT INTO seller (name) VALUES (:name)", {$name});
	}
}

export api;
