package main

import "net/http"

func (app *Application) enableCORS(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//w.Header().Set("Access-Control-Allow-Origin", "http://*")
		//https://bookish-spork-974xg5r4jv5h749v-5173.app.github.dev/
		w.Header().Set("Access-Control-Allow-Origin", "https://bookish-spork-974xg5r4jv5h749v-5173.app.github.dev")
		if r.Method == "OPTIONS" {
			w.Header().Set("Access-Control-Allow-Credentials", "ture")
			w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Accept, Contet-Type, X-CSRF-Token, Authorization")
			return
		} else {
			h.ServeHTTP(w, r)
		}
	})
}
