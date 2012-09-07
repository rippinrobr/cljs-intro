(ns cljs-intro.db
	(:require [clojure.java.jdbc :as sql]))
	
(def dbconn 
	{:classname   "org.sqlite.JDBC"
   	 :subprotocol "sqlite"
   	 :subname     "db/hockeydb.sqlite3" })

(defn run-sql [sql-vector]
	(sql/with-connection dbconn
        (sql/with-query-results rows
          sql-vector 
          (into [] rows))))

(defn ^{:doc 	"Gets the demographic information for the player" }
  get-player-demog [last-name]
	(run-sql ["select * from master where lastname like ? " last-name]))
	
(defn ^{:doc 	"Gets goals, assists, shots, etc for any player who has recorded at least
	 one offensive stat in his career" }
	get-scoring-stats [player-id]
	(run-sql ["select * from scoring where playerid = ?" player-id]))

(defn ^{:doc	"Gets goal against, save percentage, etc for any player who played in the goal" } 
  get-goalie-stats [player-id]
	(run-sql ["select * from goalies where playerid = ?" player-id]))
	
(defn ^{:doc 	"Gets the players demographics, scoring stats and goalie stats returned
	 in a map that has the following keys:
	  :demog :scoring :goalie"} 
  get-player [lastname]
	(let [demog (first (get-player-demog lastname))
			  playerid (:playerid demog)]
	{:demog demog
	 :scoring (get-scoring-stats playerid)
	 :goalie (get-goalie-stats playerid)}))