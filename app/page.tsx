import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Video Background Example</title>
                <meta name="description" content="Video background example with overlay content" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative min-h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://videos.pexels.com/video-files/7385122/7385122-uhd_2560_1440_30fps.mp4"
                />
                <div className="relative z-10 flex items-center justify-center min-h-screen text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
                        <p className="text-lg">This is an example of a video background with overlay content.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
