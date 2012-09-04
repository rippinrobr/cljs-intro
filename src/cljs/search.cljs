(ns cljs-intro.search
	(:require 
			[domina :as d]
			[clojure.browser.event :as event]))

; Grab a reference to the search button so we can
; hook up an event handler to it.
(def search-button (d/by-id "search-btn"))

; Event handler for the button
(event/listen search-button "click"
 (fn [] (js/alert (d/value (d/by-id "lname")))))
