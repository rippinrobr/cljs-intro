(ns cljs-intro.pubsub
	(:require 
			[shoreleave.pubsubs.simple :as pbus]
			[shoreleave.pubsubs.protocols :as pubsub]))

;config
(def bus (pbus/bus))

(def search-state (atom {:lastname "" :previous-searches () }))
(pubsub/publishize search-state bus)

;helper functions
(defn publish-results [res]
  (pubsub/publish bus :results res))

(defn- add-previous-search [prev-lname]
	(if (not= prev-lname "")
	  (conj (:previous-searches @search-state) prev-lname)))

(defn publish-search-string [lname]
	(let [prev-lname (:lastname @search-state)]
	  (swap! search-state merge {:lastname lname :previous-searches (add-previous-search prev-lname)})
	  (pubsub/publish bus :search lname)))

(defn publish-view-history [current-lname]
	(pubsub/publish bus :history current-lname))
	
(defn subscribe-to [topic f]
	(pubsub/subscribe bus topic f))

(defn ^:export console-logger [data]
	(js/console.log (pr-str data)))

; Couldn't get the pubsub to work with a function
;(def ps-console-logger (pubsub/publishize console-logger bus))
;(pubsub/subscribe bus ps-console-logger #(js/consol.log "SOMEONE CALLED console-logger " %))

;subscriptions
(subscribe-to :search (fn [data] (str (console-logger (str "Searched for " data)))))
(subscribe-to search-state console-logger)
