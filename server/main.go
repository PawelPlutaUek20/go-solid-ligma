package main

import (
	"log"

	_ "solid-proto-ligma/docs"
	"solid-proto-ligma/middleware"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/swagger"
	"github.com/joho/godotenv"

	gofiberfirebaseauth "github.com/sacsand/gofiber-firebaseauth"
)

type Person struct {
	Name string
	Age  uint16
}

func init() {
	// Loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

// @title Fiber Example API
// @version 1.0
// @description This is a sample swagger for Fiber
// @termsOfService http://swagger.io/terms/
// @contact.name API Support
// @contact.email fiber@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
// @host localhost:5001
// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization
// @BasePath /
func main() {
	app := fiber.New()

	app.Use(cors.New())
	app.Get("/swagger/*", swagger.HandlerDefault)

	app.Use(middleware.Protected())
	app.Get("/json", GetPerson)

	app.Listen(":5001")
}

// @Tags Person
// @Accept json
// @Produce json
// @Success 200 {object} Person
// @Security ApiKeyAuth
// @Router /json [get]
func GetPerson(c *fiber.Ctx) error {

	claims := c.Locals("user").(gofiberfirebaseauth.User)

	person := &Person{
		Name: claims.Email,
		Age:  30,
	}

	return c.JSON(person)
}
