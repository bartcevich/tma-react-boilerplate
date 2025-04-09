import TaskCompleted from "./taskCompleted";
// import { Check } from "lucide-react";
// import { Button } from "@/components/ui/button";

function ShowTasks() {
  return (
    <>
      <TaskCompleted />
      {/* <div className="max-w-md mx-auto p-4 space-y-2">
        <Button
          variant="ghost"
          className="w-full bg-[#1e2532] hover:bg-[#272f3d] text-white justify-between h-14 px-4"
        >
          <span>Join Telegram channel</span>
          <div className="flex items-center gap-2">
            <span className="text-[#37c27c]">+$100</span>
            <Check className="h-5 w-5 text-[#37c27c]" />
          </div>
        </Button>
        <div className="bottom-4 left-1/2 bg-[#37c27c] text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <Check className="h-5 w-5" />
          The task is completed!
        </div>
      </div> */}
    </>
  );
}
export default ShowTasks;
