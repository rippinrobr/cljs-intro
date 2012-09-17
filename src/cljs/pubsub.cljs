(ns cljs-intro.pubsub
	(:require 
			[domina :as d]
			[shoreleave.pubsubs.simple :as pbus]
			[shoreleave.pubsubs.protocols :as pubsub]))

(def bus (pbus/bus))
(def search-state (atom {:lastname "" }))
(def results-topic (pubsub/topicify :results))

;(def search-results (atom {}))


(defn publish-results [res]
  (pubsub/publish bus results-topic res))

(defn subscribe-to [topic f]
	(pubsub/subscribe bus topic f))

(defn subscribe-to-search [f]
	(pubsub/subscribe bus search-state f))

;(defn subscribe-to-results [f]
;	(pubsub/subscribe bus search-results f))

(defn console-logger [data]
	(js/console.log (pr-str data)))

(pubsub/publishize search-state bus)
;(pubsub/publishize search-results bus)

(subscribe-to-search console-logger)
;(subscribe-to-results console-logger)

(comment 
; shoreleave.pubsub related defs
(def bus (pbus/bus))
(def results-topic (pubsub/topicify :results))
(def search-topic (pubsub/topicify :search))


(def search-state (atom {:lastname "" :previous-searches () }))

(defn subscribe-to [topic f]
	(pubsub/subscribe bus topic f))

(defn console-logger [data]
	(js/console.log (pr-str data)))

(defn publish-results [res]
  (pubsub/publish bus results-topic res))


(pubsub/publishize search-state bus)
;(pubsub/publishize search-results bus)
;(pubsub/publishize results bus)

(subscribe-to search-state console-logger)
(subscribe-to results console-logger)

)