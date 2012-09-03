(defproject cljs-intro "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]
								 [domina "1.0.0"]]
  :plugins [[lein-cljsbuild "0.2.3"]]
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