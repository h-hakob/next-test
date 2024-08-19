DATABASE_URL="postgres://postgres:postgres@db:5432/appdb?sslmode=disable" npx prisma migrate deploy
# start app
DATABASE_URL="postgres://postgres:postgres@db:5432/workler?sslmode=disable" node server.js