import TaskList from "@/components/TaskList";
import Signup from "@/authentication/signup";
import LogIn from "@/authentication/login";
const Home = async ({}) => {
  return (
    <div className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Welcome to Event Manager
      </h1>

      <div className="grid place-items-center">
        <Signup />
      </div>
    </div>
  );
};

export default Home;
