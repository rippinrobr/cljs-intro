(ns cljs-intro.search
	(:require 
			[domina :as d]
			[domina.xpath :as dx]
		 [clojure.browser.event :as event]
			[goog.net.XhrIo :as jsonp]
			[cljs-intro.views :as v]
			[cljs-intro.pubsub :as ps]))
			
; Grab a reference to the search button so we can
; hook up an event handler to it.
(def ^{:doc "Reference to the search-button DOM object" }
   search-button (d/by-id "search-btn"))

(def ^{:doc "Reference to the previous-search-btn DOM object"}
	 previous-search-button (d/by-id "previous-search-btn"))

(d/set-styles! previous-search-button {:display "none"})

;(defn ^{:doc "converts the returned JSON to clj data, removes old html in the
;              results div and calls the function to display the new stats"} 
;	display-results [{:keys [new]}]
; (let [res-div (dx/xpath "//div[@id='results']")]
;  (d/destroy-children! res-div)
;  (d/append! res-div (v/show-stats (:results new)))))

(defn ^{:doc "converts the returned JSON to clj data, removes old html in the
              results div and calls the function to display the new stats"} 
	display-results [data]
 (let [res-div (dx/xpath "//div[@id='results']")]
  (d/destroy-children! res-div)
  (d/append! res-div (v/show-stats data)))); 

; makes the remote call to the player lookup web service 
(defn ^{:doc "calls the player web service using goog.net.XhrIo to make
              the call." }
  player-lookup [{:keys [new]}]
	(.send goog.net.XhrIo (str "/player/" (:lastname new))
	   (fn [data] (ps/publish-results (js->clj (.getResponseJson (.-target data)) :keywordize-keys true)))));(fn [data] (swap! ps/search-results merge {:results (js->clj (.getResponseJson (.-target data)) :keywordize-keys true)})))); (fn [data] (swap! ps/search-results merge {:results (js->clj (.getResponseJson (.-target data)) :keywordize-keys true)})))) 


(ps/subscribe-to-search player-lookup)
;(ps/subscribe-to-results display-results)
(ps/subscribe-to ps/results-topic display-results)

; Event handler for the button
(event/listen search-button "click"
 (fn [] (swap! ps/search-state merge {:lastname (d/value (d/by-id "lname"))}))); player-lookup (d/value (d/by-id "lname")))))

(comment 	
(def lastsearch-hidden-field (d/by-id "lastsearch"))

(defn ^{:doc "converts the returned JSON to clj data, removes old html in the
              results div and calls the function to display the new stats"} 
	display-results [data]
 (let [res-div (dx/xpath "//div[@id='results']")]
  (d/destroy-children! res-div)
  (d/append! res-div (v/show-stats data)))); (:results new)

(defn ^{:doc "calls the player web service using goog.net.XhrIo to make the call." }
	  player-lookup [{:keys [new]}]
		(.send goog.net.XhrIo (str "/player/" (:lastname new))
		   (fn [data] (swap! ps/search-results merge {:results (js->clj (.getResponseJson (.-target data)) :keywordize-keys true)})))) 

(defn ^{:doc "creates a previous search button that will kick off a search using
					    the previous search's last name"}
	show-previous-search-button [{:keys [old]}]
	  (if (> (count (:previuos-searches old)) 0)
				(d/set-styles! previous-search-button {:display ""}))
		(d/set-value! lastsearch-hidden-field (:lastname old)))

(ps/subscribe-to ps/search-state player-lookup)
(ps/subscribe-to ps/search-state show-previous-search-button)
(ps/subscribe-to ps/results-topic display-results);(fn [] (js/alert "got results!")));display-results)

; Event handlers for the buttons
(defn update-search-state []
	(let [lname (d/value (d/by-id "lname"))
	 			prev-searches (conj (:lastname ps/search-state) (:previous-searches ps/search-state))]
	 (js/console.log lname)
	 (js/console.log (pr-str prev-searches))
	 (swap! ps/search-state merge {:lastname lname :previous-searches prev-searches})))

(event/listen search-button "click" update-search-state);
(event/listen previous-search-button "click"
  (fn [] (d/set-value! (d/by-id "lname") (d/value (d/by-id "lastsearch")))
				  (update-search-state)))
				)