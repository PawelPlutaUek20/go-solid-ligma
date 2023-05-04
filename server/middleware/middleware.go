package middleware

import (
	"context"
	"fmt"
	"log"
	"os"

	firebase "firebase.google.com/go"
	gofiberfirebaseauth "github.com/sacsand/gofiber-firebaseauth"

	"github.com/gofiber/fiber/v2"
	"google.golang.org/api/option"
)

func Protected() fiber.Handler {

	serviceAccount, fileExi := os.LookupEnv("GOOGLE_SERVICE_ACCOUNT")

	fmt.Println(serviceAccount)
	if !fileExi {
		log.Fatalf("Please provide valid firebase auth credential json!")
	}

	opt := option.WithCredentialsFile(serviceAccount)
	FirebaseApp, _ := firebase.NewApp(context.Background(), nil, opt)

	return gofiberfirebaseauth.New(gofiberfirebaseauth.Config{
		FirebaseApp: FirebaseApp,
	})
}
