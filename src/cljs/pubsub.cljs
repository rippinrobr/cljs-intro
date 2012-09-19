(ns cljs-intro.pubsub
	(:require 
			[shoreleave.pubsubs.simple :as pbus]
			[shoreleave.pubsubs.protocols :as pubsub]))

;config
(def ^{:private true} bus (pbus/bus))
(def search-topic (pubsub/topicify :search))
(def results-topic (pubsub/topicify :results))
(def history-topic (pubsub/topicify :history))

(def search-state (atom {:lastname "" :previous-searches () }))
(pubsub/publishize search-state bus)

;helper functions
(defn publish-results [res]
  (pubsub/publish bus results-topic res))

(defn- add-previous-search [prev-lname]
	(if (not= prev-lname "")
	  (conj (:previous-searches @search-state) prev-lname)))

(defn publish-search-string [lname]
	(let [prev-lname (:lastname @search-state)]
	  (swap! search-state merge {:lastname lname :previous-searches (add-previous-search prev-lname)})
	  (pubsub/publish bus search-topic lname)))

(defn publish-view-history [current-lname]
	(pubsub/publish bus history-topic current-lname))
	
(defn subscribe-to [topic f]
	(pubsub/subscribe bus topic f))

(defn console-logger [data]
	(js/console.log (pr-str data)))

;subscriptions
(subscribe-to search-topic (fn [data] (str (console-logger (str "Searched for " data)))))
(subscribe-to search-state console-logger)
