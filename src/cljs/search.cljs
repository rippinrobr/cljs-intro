(ns cljs-intro.search
	(:require 
			[domina :as d]
			[domina.xpath :as dx]
		 [clojure.browser.event :as event]
			[goog.net.XhrIo :as jsonp]
			[cljs-intro.views :as v]))
			
; Grab a reference to the search button so we can
; hook up an event handler to it.
(def ^{:doc "Reference to the search-button DOM object" }
   search-button (d/by-id "search-btn"))

; Gets the results of the call /player/:lastname and converts the data from
; json to clj data.  Removes any current stats and then calls the function 
; to create the new stats view
(defn ^{:doc "converts the returned JSON to clj data, removes old stats and 
	     			  calls the function to display the new stats"} 
	display-results [json]
 (let [data (js->clj (.getResponseJson (.-target json)) :keywordize-keys true)
       demog (:demog data)
			 res-div (dx/xpath "//div[@id='results']")]
  (d/destroy-children! res-div)
  (d/append!  res-div (v/show-stats data))))

; makes the remote call to the player lookup web service 
(defn ^{:doc "calls the player web service using goog.net.XhrIo to make
              the call." }
  player-lookup [last-name]
	(.send goog.net.XhrIo (str "http://localhost:8888/player/" last-name)
	   display-results)) 
	
; Event handler for the button
(event/listen search-button "click"
 (fn [] (player-lookup (d/value (d/by-id "lname")))))
