(ns cljs-intro.search
	(:require 
			[domina :as d]
			[domina.xpath :as dx]
			[hiccups.runtime :as hiccupsrt]
			[clojure.browser.event :as event]
			[goog.net.XhrIo :as jsonp]
			[goog.dom :as dom])
	(:require-macros
	 		[hiccups.core :as hiccups]))

; Grab a reference to the search button so we can
; hook up an event handler to it.
(def ^{:doc "Reference to the search-button DOM object" }
   search-button (d/by-id "search-btn"))

(hiccups/defhtml create-player-demog [firstname lastname pos birthday]
	[:div.demog
	  [:h2 (str firstname " " lastname)]
	  [:div [:span (str "Postition: " pos) ]]
	  [:div [:span (str "Birthday: " birthday)]]])

(hiccups/defhtml create-shooting-stats [{:keys [year tmid pos gp g a pts pim plusminus ppg ppa shg sha gwg
		  														gtg sog postgp postg posta postpts postpim postplusminus
		  														postppg postppa postshg postsha postgwg postsog]}]
		[:tr
		  [:td year]
		  [:td tmid]
			[:td pos]
			[:td gp]
			[:td g]
			[:td a]
			[:td pts]
			[:td pim]
			[:td plusminus]
			[:td ppg]
			[:td ppa]
			[:td shg]
			[:td sha]
			[:td gwg]
			[:td gtg]
			[:td sog]
			[:td postgp]
			[:td postg]
			[:td posta]
			[:td postpts]
			[:td postplusminus]
			[:td postppg]
			[:td postppa]
			[:td postshg]
			[:td postsha]
			[:td postgwg]
			[:td postsog]
		]
		)

(hiccups/defhtml show-shooting-stats [stats]
	[:div.scoring
	  [:table
			[:Caption "Scoring"]
			[:thead
				[:th "Season"]
				[:th "Teamid"]
				[:th "Pos"]
				[:th "GP"]
				[:th "G"]
				[:th "A"]
				[:th "PTS"]
				[:th "PIMS"]
				[:th "+/-"]
				[:th "PPG"]
				[:th "PPA"]
				[:th "SHG"]
				[:th "SHA"]
				[:th "GWG"]
				[:th "GTG"]
				[:th "SOG"]
				[:th "Post G"]
				[:th "Post A"]
				[:th "Post PTS"]
				[:th "Post PIMS"]
				[:th "Post +/-"]
				[:th "Post PPG"]
				[:th "Post PPA"]
				[:th "Post SHG"]
				[:th "Post SHA"]
				[:th "Post GWG"]
				[:th "Post GTG"]
				[:th "Post SOG"]
				]
			[:tbody
				(map create-shooting-stats stats)]]])

(hiccups/defhtml create-goalie-stats [{:keys [year tmid gp min w l tol eng sho ga sa postgp postmin postw
																							postl postt posteng postsho postga postsa]}]
			[:tr
        [:td year]
			  [:td tmid]
				[:td gp]
				[:td min]
				[:td w]
				[:td l]
				[:td tol]
				[:td eng]
				[:td sho]
				[:td ga]
				[:td sa]
				[:td postgp]
				[:td postmin]
				[:td postw]
				[:td postl]
				[:td postt]
				[:td posteng]
				[:td postsho]
				[:td postga]
				[:td postsa]]
	)

(hiccups/defhtml show-goalie-stats [goalies]
	[:div.goalies
	  [:table
			[:Caption "Goalies"]
			[:thead
				[:th "Season"]
				[:th "Teamid"]
				[:th "GP"]
				[:th "Min"]
				[:th "W"]
				[:th "L"]
				[:th "TOL"]
				[:th "ENG"]
				[:th "SHO"]
				[:th "GA"]
				[:th "SA"]
				[:th "Post GP"]
				[:th "Post Min"]
				[:th "Post W"]
				[:th "Post L"]
				[:th "Post TOL"]
				[:th "Post ENG"]
				[:th "Post SHO"]
				[:th "Post GA"]
				[:th "Post SA"]]
			[:tbody (map create-goalie-stats goalies)]]])
	
(defn show-player-demog [{:keys [firstname lastname pos birthday birthmon birthyear]}]
 (create-player-demog firstname lastname pos (str birthmon "/" birthday "/" birthyear )))

(defn display-results [json]
 (let [data (js->clj (.getResponseJson (.-target json)) :keywordize-keys true)
       demog (:demog data)]
  (.log js/console (str "'" (:pos demog) "' equal G? => " (= (:pos demog) "G")))
	(d/append! (dx/xpath "//div[@id='results']") 
	  (str (show-player-demog demog)
		 (if (= (:pos demog) "G")
	     (str (show-goalie-stats (:goalie data))
			      (show-shooting-stats (:scoring data)))
		   (show-shooting-stats (:scoring data)))))))

(defn player-lookup [last-name]
	(.send goog.net.XhrIo (str "http://localhost:8888/player/" last-name)
	   display-results)) 
	
; Event handler for the button
(event/listen search-button "click"
 (fn [] (player-lookup (d/value (d/by-id "lname")))))
