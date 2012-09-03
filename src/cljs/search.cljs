(ns cljs-intro.search
	(:require 
			[domina :as d]
			[clojure.browser.event :as event]))

; Grab a reference to the search button so we can
; hook up an event handler to it.
(def search-button (d/by-id "search-btn"))

; Refence to the text field where the user enters
; the last name of a player they wish to lookup.
(def lname-field (d/by-id "lname"))

; Event handler for the button
(event/listen search-button "click"
 (fn [] (js/alert (d/value (d/by-id "lname")))))
