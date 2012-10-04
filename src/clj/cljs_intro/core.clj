(ns cljs-intro.core
	(:use noir.core)
	(:require [noir.server :as server]
					  [noir.response :as response]
					  [cljs-intro.db :as db]
						[noir.shoreleave.rpc :as rpc]))

; Remote Namespaces
(rpc/activate-remotes!)
(rpc/remote-ns 'cljs-intro.db :as "api")

; responds to HTTP GET calls for the URL
; Passes the player's last name to the DB 
; access code to get the player's stats.
; Returns results in JSON					
(defpage "/player/:lastname" {:keys [lastname]}
  (response/json (db/get-player lastname)))

(defn -main []
	(server/start 8888))
 