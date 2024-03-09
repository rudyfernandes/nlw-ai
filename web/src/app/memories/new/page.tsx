import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { NewMemoryForm } from '@/components/NewMemoryForm'

export default function newMemoriy() {
    return(
        <div className="flex flex-1 flex-col gap-2  p-16">
            <Link href='/' className="flex text-gray-200 items-center gap-1 text-sm hover:text-gray-100">  
                <ChevronLeft className="size-4"/>
                voltar à timeline
            </Link>

            <NewMemoryForm />  
        </div>
    )
}