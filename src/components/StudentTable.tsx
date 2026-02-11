import { Student } from "@/Types/Student";

interface Props {
    students: Student[];
}

export const StudenTable = ({students}: Props) => {
    return(
        <table className="w-full border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800 text-white">
                    <th className="p-3">Nome</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Nota 1</th>
                    <th className="p-3">Nota 2</th>
                    <th className="p-3">Nota final</th>
                </tr>
            </thead>
            <tbody className="">
                {students.map((item) => (
                    <tr className="text-gray-800 bg-indigo-200 border-b border-indigo-600" key={item.id}>
                        <td className="flex p-3 flex items-center">
                            <img className="w-20 h-20 mr-3 rounded-full overflow-hidden object-cover" src={item.avatar} alt={item.name} />
                            <div>
                                <div className="font-bold">{item.name}</div>
                                <address>{item.email}</address>
                            </div>
                        </td>
                        <td className="p-3">
                            {item.active && <div className="py-2 px-4 inline-block rounded-md bg-green-500 text-white">Active</div>}
                            {!item.active && <div className="py-2 px-4 inline-block rounded-md bg-red-500 text-white">Inativo</div>}
                        </td>
                        <td className="p-3 text-md">{item.grade1.toFixed(1)}</td>
                        <td className="p-3  text-md"> {item.grade2.toFixed(1)}</td>
                        <td className="p-3  text-lg font-bold">{item.active ? (item.grade1 + item.grade2 / 2).toFixed(1) : "--"}</td>
                    </tr>
                ))}
            </tbody>
        </table>        
    )
};