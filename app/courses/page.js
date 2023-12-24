export default function Page() {
    return (
        <div className={'relative'}>
            <p className={`text-3xl font-thin`}>
                    Courses
            </p>
            <div className={'pt-7 max-h-full '}>
                <div className={'flex'}>
                    <div>
                        <p className={'text-2xl font-light'}>Math Courses:</p>
                        <p className={'pl-3 text-xl font-light'}>Lectures:</p>
                            <div className={'pl-6 font-light'}>
                                <p>Analysis I+II</p>
                                <p>Linear Algebra and Geometry I+II</p>
                                <p>Analysis III</p>
                                <p>Number Theory</p>
                                <p>Probability Theory and Mathematical Statistics</p>
                                <p>Complex Analysis</p>
                                <p>Discrete Mathematics</p>
                            </div>
                        <p className={'pl-3 text-xl font-light'}>Seminars:</p>
                            <div className={'pl-6 font-light'}>
                                <p>Seminar on Fourier Series: Integration of Fourier Series and the Representation Theorem</p>
                                <p>Seminar on Graph Theory: The Distance Matrix of a Tree</p>
                                <p>Seminar on Statistical Learning: Unsupervised Learning, PCA, K-means Clustering</p>
                                <p>Seminar on High-dimensional Probability: VC Dimension and its Applications</p>
                            </div>
                        <p className={'pl-3 text-xl font-light'}>Internships:</p>
                            <div className={'pl-6 font-light'}>
                                <p>Statistics Internship: Statistical Simulation and Machine Learning with Python</p>
                            </div>

                    </div>
                    <div className={'pl-8'}>
                        <p className={'text-2xl font-light'}>Computer Science Courses:</p>
                        <p className={'pl-3 text-xl font-light'}>Lectures:</p>
                            <div className={'pl-6 font-light'}>
                                <p>Introduction to Programming (with TScript)</p>
                                <p>Programming with Java</p>
                                <p>Algorithms and Data Structures</p>
                                <p>Computer Architecture</p>
                                <p>Operating Systems</p>
                                <p>Database Systems</p>
                                <p>Theoretical Computer Science: Computation and Formal Language Theory</p>
                                <p>Cryptography I+II</p>
                                <p>Deep Learning</p>
                                <p>Quantum Information and Computation</p>
                            </div>
                        <p className={'pl-3 text-xl font-light'}>Internships:</p>
                            <div className={'pl-6 font-light'}>
                                <p>Computer Science Internship: Building Sudoku Game with Java</p>
                            </div>


                    </div>
                </div>

            </div>
        </div>
    )
}