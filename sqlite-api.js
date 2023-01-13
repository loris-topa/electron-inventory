api = {
	init: function () {
		return new sqlite3.Database("database.sqlite3")
	}

}

export api;
