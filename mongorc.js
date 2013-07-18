var prompt = function() { return db + "@" + db.getMongo().host + "> "; }

var day = function(year, month, day) {
  tdy = new Date(year, month-1, day);
  tmw = new Date();
  tmw.setDate(tdy.getDate()+1);
  return {$gte: tdy, $lt: tmw};
}

DBCollection.prototype.auditFind = function(query) {
  return this.find(query, {topic: true, body: true});
}
