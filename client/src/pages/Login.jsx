import { toast } from "react-hot-toast";
import { FaSpotify } from "react-icons/fa";
import PersonWithHeadPhoneSvg from "../assets/audio_player.svg";

const Login = () => {
    const createSpotifyAuthUrl = (clientId, redirectUri) => {
        const scope = encodeURIComponent(
            "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state"
        );

        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;

        return authUrl;
    };

    const authUrl = createSpotifyAuthUrl(
        import.meta.env.VITE_SPOTIFY_ID,
        import.meta.env.VITE_REDIRECT_URI
    );
    console.log(authUrl);

    return (
        <div className="sm:h-screen w-full flex items-center justify-center">
            <div className="max-w-3xl m-4 flex flex-col sm:border-2 sm:border-gray-400 rounded sm:flex-row">
                <div className="py-8 flex-1 flex flex-col justify-center items-center gap-8">
                    <h3 className="text-2xl font-semibold">
                        Hey There <span className="wave">👋</span>
                    </h3>
                    <a
                        className="flex items-center gap-1 bg-green-600 text-white text-lg px-4 py-2 hover:bg-green-700 cursor-pointer"
                        // onClick={handleLogin}
                        href={authUrl}
                    >
                        <FaSpotify className="text-xl" />
                        Login with spotify
                    </a>
                </div>
                <div className="flex-1 max-w-sm sm:max-w-none">
                    <img
                        src={PersonWithHeadPhoneSvg}
                        alt="Person Listening music illustration"
                        width={500}
                        height={500}
                        className="bg-green-500 p-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
