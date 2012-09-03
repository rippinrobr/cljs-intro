(ns cljs-intro.hello)

(defn ^:export greeting []
(.write js/document "<p>Hello Hockey Fans!</p>")  )