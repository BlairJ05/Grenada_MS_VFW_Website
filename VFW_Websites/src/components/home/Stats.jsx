function Stats() {
    return (
        <div className="p-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center text-center">
                <div className="p-4 rounded">
                    <h2 className="text-3xl font-bold" style={{ color: "#c98b36" }}>1945</h2>
                    <p className="text-gray-600">Serving Since</p>
                </div>
                <div className="p-4 rounded">
                    <h2 className="text-3xl font-bold" style={{ color: "#c98b36" }}>200+</h2>
                    <p className="text-gray-600">Active Members</p>
                </div>
                <div className="p-4 rounded">
                    <h2 className="text-3xl font-bold" style={{ color: "#c98b36" }}>$50k+</h2>
                    <p className="text-gray-600">Community Support</p>
                </div>
            </div>
        </div>
    );
}

export default Stats;