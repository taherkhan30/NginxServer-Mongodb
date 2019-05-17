conn = new Mongo();

db = conn.getDB("test");

db = connect("localhost:27017/test");

db.test.insert({"name" : "Taher Khan"})

db.test.insert([{"name" : "Ali"}, {"name" : "Peter"}])
