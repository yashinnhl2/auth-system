# Docker & PostgreSQL

## What the docker-compose.yml does

| Field | Value | Purpose |
|-------|-------|---------|
| `image` | postgres:16 | Official PostgreSQL 16 image |
| `container_name` | auth_db | Fixed name to reference the container |
| `POSTGRES_USER` | set in `.env` | Database username |
| `POSTGRES_PASSWORD` | set in `.env` | Database password |
| `POSTGRES_DB` | set in `.env` | Database name (auto-created on first run) |
| `ports` | 5432:5432 | Exposes DB on localhost:5432 |
| `volumes` | postgres_data | Persists data across container restarts |

## Commands

```bash
# Start database in background
docker compose up -d

# Stop and remove container
docker compose down

# Stop and wipe all data (full reset)
docker compose down -v

# See running containers
docker ps

# Check PostgreSQL is ready
docker exec auth_db pg_isready -U $POSTGRES_USER -d $POSTGRES_DB

# Run a SQL query directly
docker exec auth_db psql -U $POSTGRES_USER -d $POSTGRES_DB -c "SELECT version();"

# View PostgreSQL logs
docker logs auth_db
```

## Connection string

```
postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@localhost:5432/<POSTGRES_DB>
```

Values come from your `.env` file. This is what the backend will use to connect.
