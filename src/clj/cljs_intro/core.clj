(ns cljs-intro.core
	(:use noir.core)
	(:require [noir.server :as server]
					  [noir.response :as response]
						[cljs-intro.db :as db]))
					
(defpage "/player/:lastname" {:keys [lastname]}
  (response/json (db/get-player lastname)))

(defn -main []
	(server/start 8888))
 