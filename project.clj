(defproject cljs-intro "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]
								 [domina "1.0.0"]
								 [hiccups "0.1.1"]
								 [org.clojure/java.jdbc "0.2.3"]
								 [sqlitejdbc "0.5.6"]
								 [shoreleave "0.2.2"]
								 [shoreleave/shoreleave-pubsub "0.2.2"]
								 [shoreleave/shoreleave-remote-noir "0.2.2"]
								 ;[shoreleave/shoreleave-remote "0.2.2"]
								 [cheshire "4.0.1"]
								[noir "1.3.0-beta10"]]
  :plugins [[lein-cljsbuild "0.2.3"]]
  :main cljs-intro.core
  :source-path "src/clj"
  :cljsbuild {
    :builds [{
			:source-path "src/cljs"
			:compiler {
				:output-to "resources/public/hockey.js"
				:optimization :whitespace
				:pretty-print true
			 }
	   }]
	}
)