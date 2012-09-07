(ns cljs-intro.search
	(:require 
			[domina :as d]
			[domina.xpath :as dx]
			[domina.css :as dc]
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

(hiccups/defhtml create-player-demog [firstname lastname pos]
	[:div.demog
	 [:div.page-header.tabs.clearfix.nm
	  [:h2 (str firstname " " lastname)
	  [:span (str "&nbsp;&nbsp;(" pos ")") ]]]])
	
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
			;[:td postgp]
			;[:td postg]
			;[:td posta]
			;[:td postpts]
			;[:td postplusminus]
			;[:td postppg]
			;[:td postppa]
			;[:td postshg]
			;[:td postsha]
			;[:td postgwg]
			;[:td postsog]
		]
		)

		(hiccups/defhtml create-playoff-shooting-stats [{:keys [year tmid pos postgp postg posta postpts postpim postplusminus
				  														postppg postppa postshg postsha postgwg postgtg postsog]}]
				[:tr
				  [:td year]
				  [:td tmid]
					[:td pos]
					[:td postgp]
					[:td postg]
					[:td posta]
					[:td postpts]
					[:td postpim]
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
	[:br]
	[:div.scoring
	  [:h2 "Scoring"]
	  [:h3 "Regular Season"]
	  [:table {:class "table"}
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
				]
			[:tbody
				(map create-shooting-stats stats)]]
				
		 		[:h3 "Post Season"]
			  [:table {:class "table"}
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
						[:th "SOG"]]
					[:tbody
						(map create-playoff-shooting-stats stats)]]])

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
				;[:td postgp]
				;[:td postmin]
				;[:td postw]
				;[:td postl]
				;[:td postt]
				;[:td posteng]
				;[:td postsho]
				;[:td postga]
				;[:td postsa]
				]
	)

	(hiccups/defhtml create-goalie-playoff-stats [{:keys [year tmid postgp postmin postw
																								postl postt posteng postsho postga postsa]}]
				[:tr
	        [:td year]
				  [:td tmid]
					[:td postgp]
					[:td postmin]
					[:td postw]
					[:td postl]
					[:td postt]
					[:td posteng]
					[:td postsho]
					[:td postga]
					[:td postsa]
					]
		)

(hiccups/defhtml show-goalie-stats [goalies]
	[:div.goalies
	  [:h3 "Regular Season"]
	  [:table.table
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
				[:th "SA"]]
				;[:th "Post GP"]
				;[:th "Post Min"]
				;[:th "Post W"]
				;[:th "Post L"]
				;[:th "Post TOL"]
				;[:th "Post ENG"]
				;[:th "Post SHO"]
				;[:th "Post GA"]
				;[:th "Post SA"]]
			[:tbody (map create-goalie-stats goalies)]]
			[:br]
			[:h3 "Post Season"]
		  [:table.table
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
					[:th "SA"]]
				[:tbody (map create-goalie-playoff-stats goalies)]]])
	
(defn show-player-demog [{:keys [firstname lastname pos birthday birthmon birthyear]}]
 (create-player-demog firstname lastname pos ))

(defn display-results [json]
 (let [data (js->clj (.getResponseJson (.-target json)) :keywordize-keys true)
       demog (:demog data)
			 res-div (dx/xpath "//div[@id='results']")]
  (d/destroy-children! res-div)
  (d/append!  res-div
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
