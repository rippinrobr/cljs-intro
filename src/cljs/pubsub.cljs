(ns cljs-intro.pubsub
	(:require 
			[domina :as d]
			[shoreleave.pubsubs.simple :as pbus]
			[shoreleave.pubsubs.protocols :as pubsub]))

(def bus (pbus/bus))
(def search-state (atom {:lastname "" }))
(def search-results (atom {}))

(defn subscribe-to-search [f]
	(pubsub/subscribe bus search-state f))

(defn subscribe-to-results [f]
	(pubsub/subscribe bus search-results f))

(defn console-logger [data]
	(js/console.log (pr-str data)))

(pubsub/publishize search-state bus)
(pubsub/publishize search-results bus)

(subscribe-to-search console-logger)
(subscribe-to-results console-logger)

