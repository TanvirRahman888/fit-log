import MyPlanClient from "@/components/MyPlan/MyPlanClient";


const MyPlanPage = () => {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10">
        <div>
          <h1 className="text-3xl font-black uppercase sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <MyPlanClient />
      </div>
    </main>
  );
};

export default MyPlanPage;