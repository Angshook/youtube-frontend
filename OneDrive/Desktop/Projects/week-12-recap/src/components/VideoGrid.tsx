import { VideoCard } from "./VideoCard"

const videos=[{
        title :"How to learn coding in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Dancing in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
},{
    title :"How to learn Jumping in 30 days | 30 day plan |  code with me",
        image :"photo.jpg",
        logoimage :"logo.jpg",
        author :"Angshook Banerjee",
        views :"46M ",
        timestamp :"1 month Ago ",
}]

//the above will actually from the backend

export function VideoGrid(){
    return <div className="grid grid-cols-1
    md:grid-cols-2 lg:grid-cols-4">
        {videos.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                logoimage={video.logoimage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>
        )}
    </div>
}