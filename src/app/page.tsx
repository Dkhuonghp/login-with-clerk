import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div className="flex items-center justify-center flex-col">
            <SignInButton mode="modal">
                <Button>
                    Login
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </SignInButton>
        </div>
    )
}

export default page