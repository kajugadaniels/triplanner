import React from 'react'
import { ArrowDownIcon, Globe2Icon, GlobeIcon, LandmarkIcon, PlaneIcon, SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { HeroVideoDialog } from '@/components/hero-video-dialog'

const suggestions = [
    {
        title: 'Create New Tripe',
        icon: <GlobeIcon className='text-blue-500 h-5 w-5 hover:text-white' />,
    },
    {
        title: 'Inspire Me Where To Go',
        icon: <PlaneIcon className='text-green-500 h-5 w-5 hover:text-white' />,
    },
    {
        title: 'Discover Hidden Gems',
        icon: <LandmarkIcon className='text-blue-500 h-5 w-5 hover:text-white' />,
    },
    {
        title: 'Adventure Destinations',
        icon: <Globe2Icon className='text-blue-500 h-5 w-5 hover:text-white' />,
    }
]

const Explore = () => {
    return (
        <div className="mt-24 w-full flex justify-center">
            <div className='max-w-3xl w-full text-center space-y-6'>
                <h1 className='text-xl md:text-5xl font-bold'>
                    Hey I am your personal <span className='text-primary'>Trip Planner</span>
                </h1>
                <p className='text-lg'>
                    Tell me where you want to go and what you want to do, and I will create a personalized itinerary for you in seconds.
                </p>
                
                <div>
                    <div className="border rounded-2xl p-4 relative">
                        <Textarea
                            placeholder='E.g., "I want to visit Paris for 5 days and see the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."'
                            rows={7}
                            className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'
                        />
                        <Button size={'icon'} className="absolute bottom-6 right-6">
                            <SendIcon className='h-5 w-5' />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-5">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white transition">
                            {suggestion.icon}
                            <span className="text-xs">{suggestion.title}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center flex-col">
                    <h2 className='my-7 mt-14  gap-2 text-center'>
                        Not sure where to start? <strong>See how it works</strong> <ArrowDownIcon className='inline-block h-5 w-5 mb-1' />
                    </h2>

                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
            </div>
        </div>
    )
}

export default Explore
