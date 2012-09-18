(ns cljs-intro.views
	(:require 
			[hiccups.runtime :as hiccupsrt])
	(:require-macros
	 		[hiccups.core :as hiccups]))


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
			[:td sog]])

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
			[:td ]
			[:td postsog]])

(hiccups/defhtml shooting-stats-table-header []
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
		[:th "SOG"]])

(hiccups/defhtml show-shooting-season-stats [stats]
	[:h3 "Regular Season"]
  [:table {:class "table"}
		(shooting-stats-table-header)
		[:tbody
			(map create-shooting-stats stats)]])

(hiccups/defhtml show-shooting-playoff-stats [stats]
	[:h3 "Post Season"]
  [:table {:class "table"}
		(shooting-stats-table-header)
		[:tbody
			(map create-playoff-shooting-stats stats)]])

(hiccups/defhtml show-shooting-stats [stats]
	[:div.scoring
	  [:h2 "Scoring"]
	  		(show-shooting-season-stats stats)
		 		[:br]
				(show-shooting-playoff-stats stats)])

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
				[:td sa]])

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
				[:td postsa]])

(hiccups/defhtml goalie-stats-table-header []
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
		[:th "SA"]])

(hiccups/defhtml show-goalie-regular-season-stats [goalies]
	[:h3 "Regular Season"]
  [:table.table
	  (goalie-stats-table-header)
		[:tbody (map create-goalie-stats goalies)]])

(hiccups/defhtml show-goalie-playoff-stats [goalies]
	[:h3 "Post Season"]
  [:table.table
		(goalie-stats-table-header)
		[:tbody (map create-goalie-playoff-stats goalies)]])

(hiccups/defhtml show-goalie-stats [goalies]
	[:div.goalies
	    (show-goalie-regular-season-stats goalies)
			[:br]
			(show-goalie-playoff-stats goalies)])

(hiccups/defhtml show-player-demog [{:keys [firstname lastname pos]}]
	[:div.demog
	 [:div.page-header.tabs.clearfix.nm
	  [:h2 (str firstname " " lastname)
	  [:span.pos (str "(" pos ")") ]]]])

(hiccups/defhtml show-stats [data]
  (let [demog (:demog data)]
		(str (show-player-demog demog)
	  (if (= (:pos demog) "G")
      (str (show-goalie-stats (:goalie data))
		      (show-shooting-stats (:scoring data)))
	    (show-shooting-stats (:scoring data))))))
	
(hiccups/defhtml show-history [data]
	[:div.history
	 [:h3 "Search History"]
	 [:ul
		 (map #(str "<li>" % "</li>") data)
		]])