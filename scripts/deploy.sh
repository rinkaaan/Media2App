source ~/startup.sh
WORKPLACE="$HOME/workplace/Media2"

WORKSPACE="$WORKPLACE/Media2App"
(
  cd "$WORKSPACE"
  rsync-project Media2
  ssh root@hetzner "cd ~/workplace/Media2/Media2App && npm run build"
)
