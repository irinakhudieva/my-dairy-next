'use client'

import { deleteDuty } from "@/app/actions"
import Image from "next/image"

export default function DeleteButton({duty}: {duty: string}) {

    return (
        <button onClick={() => deleteDuty(duty)}>
            <Image 
                src='/delete.svg' 
                width={20} 
                height={20} 
                alt="Icon Delete" 
                
            />
        </button>
    )
}
