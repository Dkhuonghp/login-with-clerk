import { SignIn } from '@clerk/nextjs'
import React from 'react'

function page() {
    return (
        <div className="flex items-center justify-center flex-col h-">
            <SignIn/>
        </div>
    )
}

export default page
