import { ChartNoAxesColumn, Award, File } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 h-[130vh] border-gray-300 border-r pt-16 pr-4 font-semibold text-gray-600">
        <div className="flex item-centre gap-4 hover:bg-gray-100 hover:text-blue-700 pl-4 pr-20 py-6 rounded-r-full">
            <ChartNoAxesColumn/>
            Dashboard
        </div>
        <div className="flex item-centre gap-4 hover:bg-gray-100 hover:text-blue-700 pl-4 pr-20 py-6 rounded-r-full">
            <Award/>
            Skill Test
        </div>
        <div className="flex item-centre gap-4 hover:bg-gray-100 hover:text-blue-700 pl-4 pr-20 py-6 rounded-r-full">
            <File/>
            Internship
        </div>
    </div>

  )
}

export default Sidebar