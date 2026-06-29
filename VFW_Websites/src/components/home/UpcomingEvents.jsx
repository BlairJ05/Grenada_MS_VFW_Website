function UpcomingEvents() {
    return (
        <section className=" bg-[#F5F1E8] my-30 mx-80">
            <h2 className="text-3xl font-bold " style={{ color: "#0B1E4A" }}>Upcoming Events</h2>
            <div className="w-12 h-1 bg-[#D4871A] mt-2 rounded mb-15" />

                <div className="grid grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 items-center bg-[#0B1E4A] text-white px-4 py-2 rounded-xl my-2 pt-2 pb-2 pl-6 pr-6 h-[300px] w-[600px]">
                        <p className="">FEATURED</p>
                        <h1 className="text-[30px] font-bold">Card 1</h1>
                        <p>Details about upcoming events will be displayed here.</p>
                        <p>Details about upcoming events will be displayed here.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                            <div className="bg-white text-[#0B1E4A] px-4 py-2 rounded-xl my-2 pt-2 pb-2 pl-6 pr-6 h-[100px] w-[600px]">
                                <h1 className="text-[20px] text-[#B8C8E8] font-bold">Card 2</h1>
                                <p>Details about upcoming events will be displayed here.</p>
                                <p>Details about upcoming events will be displayed here.</p>
                            </div>
                            <div className="bg-white text-[#0B1E4A] px-4 py-2 rounded-xl my-2 pt-2 pb-2 pl-6 pr-6 h-[100px] w-[600px]">
                                <h1 className="text-[20px] text-[#0B1E4A] font-bold">Card 3</h1>
                                <p>Details about upcoming events will be displayed here.</p>
                                <p>Details about upcoming events will be displayed here.</p>
                            </div>
                            <div className="bg-white text-[#0B1E4A] px-4 py-2 rounded-xl my-2 pt-2 pb-2 pl-6 pr-6 h-[100px] w-[600px]">
                                
                                <h1 className="text-[20px] ">Card 4</h1>
                                <p>Details about upcoming events will be displayed here.</p>
                                <p>Details about upcoming events will be displayed here.</p>
                            </div>
                    
                    </div>
                </div>
        </section>
    );
}

export default UpcomingEvents;