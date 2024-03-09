'use client'
import { FormEvent } from 'react'
import { MediaPicker } from './MediaPicker'
import { Camera } from 'lucide-react'
import { api } from '@/lib/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
// import { cookies } from 'next/headers'

export function NewMemoryForm() {
    const router = useRouter()
    async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const fileToUpload = formData.get('coverUrl')

        let coverUrl = ''

        if (fileToUpload){
            const uploadFormData = new FormData()
            uploadFormData.set('file', fileToUpload)

            const uploadResponse = await api.post('/upload', uploadFormData)
            
            coverUrl = uploadResponse.data.fileUrl
        }

        const token = Cookie.get('token')

        await api.post('/memories', {
            coverUrl,
            content: formData.get('content'),
            isPublic: formData.get('IsPublic')
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        router.push('/')
    }
    return (
        <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="media" className="flex gap-1.5 font-sm text-gray-200 items-center cursor-pointer hover:text-gray-100">
                        <Camera className="size-4"/>
                        Anexar midia
                    </label>
                    <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                        <input type="checkbox" name="isPublic" id="isPublic" value='true' className="size-4 rounded border-gray-400 text-purple-500 bg-gray-700"/>
                        Tornar memoria public
                    </label>
                </div>

                <MediaPicker />

                <textarea 
                 name="content"
                 spellCheck={false}
                 className="w-full flex-1 resize-none rounded border-0 bg-transparent text-gray-200 border-non text-lg p-0 leading-relaxed placeholder-gray-400 focus:ring-0"
                 placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
                />

                <button
                    type='submit' 
                    className='shadow-2xl self-end inline-block rounded-full bg-violet-600 px-5 py-3 font-alt text-sm leading-none uppercase text-gray-950 hover:bg-violet-700'>
                    Salvar
                </button>
            </form>
    )
}