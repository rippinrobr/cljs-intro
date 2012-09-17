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

; Gets the results of the call /player/:lastname and converts the data from
; json to clj data.  Removes any current stats and then calls the function 
; to create the new stats view
(defn ^{:doc "converts the returned JSON to clj data, removes old html in the
              results div and calls the function to display the new stats"} 
	display-results [{:keys [new]}]
 (let [res-div (dx/xpath "//div[@id='results']")]
  (d/destroy-children! res-div)
  (d/append! res-div (v/show-stats (:results new)))))

; makes the remote call to the player lookup web service 
(defn ^{:doc "calls the player web service using goog.net.XhrIo to make
              the call." }
  player-lookup [{:keys [new]}]
	(.send goog.net.XhrIo (str "/player/" (:lastname new))
	   (fn [data] (swap! ps/search-results merge {:results (js->clj (.getResponseJson (.-target data)) :keywordize-keys true)})))) 
	

(ps/subscribe-to-search player-lookup)
(ps/subscribe-to-results display-results)

; Event handler for the button
(event/listen search-button "click"
 (fn [] (swap! ps/search-state merge {:lastname (d/value (d/by-id "lname"))}))); player-lookup (d/value (d/by-id "lname")))))
