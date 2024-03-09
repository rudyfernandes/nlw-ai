import { User } from "lucide-react";

export function Signin() {
    return (
        <a 
          className="flex items-center gap-3 text-left hover:text-gray-50 transition duration-200" 
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        >
          <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500 hover:text-gray-50 transition duration-300 '/>
          </div>

          <p className='text-sm leading-snug max-w-[140px]'> <span className='underline '>Crie sua conta</span> e salve suas memórias!</p>
        </a>
    )
}