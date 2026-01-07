package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type Application struct {
	Domain string
}

func main() {
	//set application config
	var app Application
	//read from command line

	//connect to the database

	//start a web server
	app.Domain = "example.com"

	log.Println("Starting application on port", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.Routes())
	if err != nil {
		log.Fatal(err)
	}
}
