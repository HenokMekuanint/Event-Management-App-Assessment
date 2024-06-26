import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface TaskFilterProps {}

const TaskFilter = ({}: TaskFilterProps) => {
  const searchParams = useSearchParams();
  const tasksFilter = searchParams.get("tasks");

  return (
    <div className="mb-4">
      <ul className="flex flex-wrap gap-1 sm:gap-4 justify-center text-sm sm:text-base font-medium text-center text-slate-500 border-b border-slate-200 ">
        <Link
          href="/"
          className={`${
            tasksFilter === null && "bg-emerald-200 text-slate-900 "
          } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none`}
        >
          All Events
        </Link>

        
      </ul>
    </div>
  );
};

export default TaskFilter;
