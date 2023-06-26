import { toast } from "react-hot-toast";
import { FaSpotify } from "react-icons/fa";
import PersonWithHeadPhoneSvg from "../assets/audio_player.svg"

const Login = () => {
    const handleLogin = async () => {
        try {
            // await signIn("spotify");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="sm:h-screen w-full flex items-center justify-center">
            <div className="max-w-3xl m-4 flex flex-col sm:border-2 sm:border-gray-400 rounded sm:flex-row">
                <div className="py-8 flex-1 flex flex-col justify-center items-center gap-8">
                    <h3 className="text-2xl font-semibold">Hey There <span className="wave">👋</span></h3>
                    <button
                        className="flex items-center gap-1 bg-green-600 text-white text-lg px-4 py-2 hover:bg-green-700"
                        onClick={handleLogin}
                    >
                        <FaSpotify className="text-xl" />
                        Login with spotify
                    </button>
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
