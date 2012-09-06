(ns cljs-intro.db
	(:require [clojure.java.jdbc :as sql]))
	
(def dbconn 
	{:classname   "org.sqlite.JDBC"
   	 :subprotocol "sqlite"
   	 :subname     "db/hockeydb.sqlite3" })

(defn run-sql [db-conn sql-vector]
	(sql/with-connection db-conn
        (sql/with-query-results rows
          sql-vector 
          (into [] rows))))

(defn get-player-demog [last-name]
	(run-sql dbconn ["select * from master where lastname = ? " last-name]))
	
(defn get-scoring-stats [player-id]
	(run-sql dbconn ["select * from scoring where playerid = ?" player-id]))

(defn get-goalie-stats [player-id]
	(run-sql dbconn ["select * from goalies where playerid = ?" player-id]))
	
(defn get-player [lastname]
	(let [demog (get-player-demog lastname)
			  playerid (:playerid (first demog))]
	{:demog demog
	 :scoring (get-scoring-stats playerid)
	 :goalie (get-goalie-stats playerid)}))