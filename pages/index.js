import Head from 'next/head'
        import Header from '@components/Header'
        import Footer from '@components/Footer'

        export default function Home() {
            return (
                    <div className="container">
                        <Head>
                            <title>D3 INTERACTIVE VISUALIZATION USING GRAPHS</title>
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                    
                        <main>     
                            <div class="about-container">
                    
                                <p className="description" >
                                <h2 className="title"  align="center"> TEAM TWO INTERACTIVE VISUALIZATION PROJECT WITH LINKS TO TEAM MEMBERS GRAPHS</h2>
                                </p>
                    
                    
                                <p>
                                <h3 align="center"> TEAM TWO INTERACTIVE VISUALIZATION PROJECT </h3>
                                </p>
                    
                     <div class="widecard" align="center">
                                <p> 
                                <h4 align="center">THE DATASET</h4>
                                The Human Resources dataset was gotten from  
                                <a href="https://www.kaggle.com/rhuebner/human-resources-data-set"> Kaggle </a>
                                It is from a fictitious company  and it contains 36 columns and 312 rows.
                                Find the preprocessed dataset at <a href="https://liveteesac-my.sharepoint.com/:x:/g/personal/w9497107_live_tees_ac_uk/ERi0-KYADy1IodCWiTP5DgcBBc_PDLNU5fWHJBuItJ2I3A?e=ye2Dwg">
                                Human Resources Dataset                    
                                </a>
                                <br/>
                                </p>
                    </div>
                    
                    
                    
                                <h4 align="center"> THE CHARTS </h4>
                                <p align="left">   
                    
                                <div class="widecard">
                                    <a className="card" href="https://bibiansgroupedstackedbarchart.netlify.app/">
                                        <div>
                                            <h3 class="chart-title">Member 1 </h3>
                                            <h4 class="chart-title">Chart Type: GROUPED STACKED BAR CHART</h4>
                                            <p class="chart-paragraph">Name: IGARANDO EBINIPRE BIBIAN</p>
                                            <p class="chart-paragraph">Student Number: B1230374</p>
                    
                                        </div>
                                    </a>
                                    <a className="card" href="https://nallanissunburst.netlify.app//">
                                        <div>
                                            <h3 class="chart-title">Member 2 </h3>
                                            <h4 class="chart-title">Chart Type: SUNBURST CHART</h4>
                                            <p class="chart-paragraph">Name: NAVEENRAO NALLANI  </p>
                                            <p class="chart-paragraph">Student Number: W9543071</p>
                                        </div>
                                    </a>
                                    <a className="card" href="https://mahithasdonut.netlify.app/">
                                        <div>
                                            <h3 class="chart-title">Member 3 </h3>
                                            <h4 class="chart-title">Chart Type: DOUGHNUT CHART</h4>
                                            <p class="chart-paragraph">Name: KODAVATI MAHITHA </p>
                                            <p class="chart-paragraph">Student Number: W9439813</p>
                                        </div>
                                    </a>
                                    <a className="card" href="https://deepikaszoomabletreemap.netlify.app/">
                                        <div>
                                            <h3 class="chart-title">Member 4 </h3>
                                            <h4 class="chart-title"> Chart Type: ZOOM-ABLE TREE MAP</h4>
                                            <p class="chart-paragraph">Name: GUVALA DEEPIKA </p>
                                            <p class="chart-paragraph">Student Number: W9497107</p>
                                        </div>
                                    </a>
                                    <a className="card" href="https://jaswantsscatterplot.netlify.app/">
                                        <div>
                                            <h3 class="chart-title">Member 5 </h3>
                                            <h4 class="chart-title"> Chart Type: - SCATTER PLOT SCATTER PLOT</h4>
                                            <p class="chart-paragraph">Name: VEMPATI JASWANT</p>
                                            <p class="chart-paragraph">Student Number: W9565404</p>
                                        </div>
                                    </a>
                    
                                </div>
                                <div className="scrum-link">
                                    <h3 className="sky" align="center"> DOCUMENTATION </h3>
                                    <p align="center">To view the entire planning process, click the link below </p>
                                    <p align="center">
                                        <a href="https://trello.com/b/ZsgOAiGU"> Trello </a>
                                    </p>
                                </div>
                                <br/><br/><br/>
                    
                                </p>
                            </div>
                        </main>
                    
                        <Footer />
                    </div>
                    )
        }
