import Maincard from "./components/maincard";
import Snowfall from "./components/snowfall";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Snowfall />
      <main className="flex-grow flex justify-center items-center">
        <Maincard />
      </main>
    </div>
  );
}