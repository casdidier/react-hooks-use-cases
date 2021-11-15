// https://www.benmvp.com/blog/successfully-using-async-functions-useeffect-react/

const useTopPlayers = (category, season) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Add inner async function
    const fetchTopPlayers = async () => {
      try {
        const playerIds = await getTopPlayersApi(category, season);
        const rawPlayers = await getPlayersByIdApi(playerIds);

        setPlayers(normalizeApiPlayers(rawPlayers));
      } catch (err) {
        Bugsnag.notify(err);
        setPlayers(null);
      }
    };

    // Call function immediately
    fetchTopPlayers();
  }, [category, season]);

  return players;
};

// 🛑 DON'T DO THIS! 🛑
// useEffect(async () => {
