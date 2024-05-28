WORKPLACE="$HOME/workplace/Media2"

WORKSPACE="$WORKPLACE/Media2App"
SCHEMA_PATH="http://localhost:8080/openapi.json"

(
  cd "$WORKSPACE"
  rm -rf openapi-client
  npx openapi -i "$SCHEMA_PATH" -o openapi-client
)
