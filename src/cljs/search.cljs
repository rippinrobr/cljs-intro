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
(def lastname-field (d/by-id "lname"))
(def history-button (d/by-id "history-btn"))

(d/set-styles! history-button {:display "none"})

(defn update-results-div [data]
	(let [res-div (dx/xpath "//div[@id='results']")]
	  (d/destroy-children! res-div)
	  (d/append! res-div data)))

(defn ^{:doc "converts the returned JSON to clj data, removes old html in the
              results div and calls the function to display the new stats"} 
	display-results [data]
 (update-results-div (v/show-stats data)))

; makes the remote call to the player lookup web service 
(defn ^{:doc "calls the player web service using goog.net.XhrIo to make the call." }
  player-lookup [lastname]
  (.send goog.net.XhrIo (str "/player/" lastname)
	   (fn [data] 
		   (ps/publish-results 
					(js->clj (.getResponseJson (.-target data)) :keywordize-keys true))))) 

(defn search-state-change [{:keys [new]}]
	(if (> (count (:previous-searches new)) 0)
	   (d/set-styles! history-button {:display ""})))

(defn view-history [current-lname]
	(update-results-div (v/show-history (conj (:previous-searches @ps/search-state) current-lname))))

; Subscriptions
(ps/subscribe-to ps/search-topic player-lookup)
(ps/subscribe-to ps/results-topic display-results)
(ps/subscribe-to ps/search-state search-state-change)
(ps/subscribe-to ps/history-topic view-history)

; Event handlers
(event/listen search-button "click"
 (fn [] (ps/publish-search-string (d/value lastname-field))))

(event/listen history-button "click" (fn [] (ps/publish-view-history (d/value lastname-field))))
