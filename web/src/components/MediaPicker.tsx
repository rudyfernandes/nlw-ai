"use client"
import { ChangeEvent, useState } from "react"

export function MediaPicker() {

    const [preview, setPreview] = useState<string | null>(null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const { files } = event.target

        if (!files){
            return 
        }

        const previewURL = URL.createObjectURL(files[0])

        setPreview(previewURL)
    }

    return (
       <>
            <input 
                onChange={onFileSelected} 
                className="invisible size-0"
                name="coverUrl"
                type="file" 
                accept="image/*"
                id="media" 
            />

            { preview && (
                <img 
                    src={preview} 
                    alt="" 
                    className=" w-full aspect-video rounded-lg object-cover" 
                />
            )}
       </>
    )   
}