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
            <h2 className="title"  align="center"> INTERACTIVE VISUALIZATION PROJECT WITH LINKS TO TEAM MEMBERS GRAPHS</h2>
            </p>


            <p>
            <h2 align="center" className="sky"> INTERACTIVE VISUALIZATION GROUP PROJECT </h2>
            <h3 align="center" className="sky"> TEAM 2 INTERACTIVE VISUALIZATION ASSESMENT </h3>
            </p>
            <div id="mainbody" class="widecard">  <br/> <br/>

                <p class="mediumcard"> 
                <h4 align="center" className="sky">WHAT IS INTERACTIVE VISUALIZATION</h4>

                The technique of developing interactive visualizations to comprehend patterns, variances, and derive useful and meaningful 
                insights from data is known as data visualization. <br/> Data visualization is primarily used for data cleansing, exploration, and discovery, as 
                well as for conveying outcomes to Business stakeholders. <br/> It can be used as a tool for data pre-processing as well as gaining insights into the data. 
                The key to effective communication of outcomes is having the correct selection of visuals for diverse data types and business scenarios. <br/> In this project, 
                we will be discussing business insights that can be drawn from the data gotten from a Superstore Giant in the United States of America.
                </p>

                <p class="mediumcard"> 
                <h4 className="sky" align="center">THE DATASET</h4>
                The Superstore dataset was gotten from  
                <a href="https://www.kaggle.com/datasets/vivek468/superstore-dataset-final"> Kaggle </a>
                and it about a 
                superstore giant looking to understand which product, categories, regions and customer segment they focus on or be wary of. 
                The dataset contains 9994 rows of records and 21 columns of attributes with no missing values.
                </p>


                <p class="mediumcard">
                <h4 align="center" className="sky">DATA PREPROCESSING </h4>
                Data pre-processing is a data mining technique that transforms raw data into an understandable format.  <br/> It includes data cleaning, reduction, and transformation.
                The python 3 IDE was employed in the pre-processing of the data.
                The first step was to input and load the dataset into python after which the null values within the dataset was checked but none was found.  <br/> For the next step, unique () is used to check qualitative data for noises of impossible values such as incorrect misspelt data entries, or errors of inconsistent data such as not comparable numerical measurement formats and data types.
                Lastly, attributes that won’t be important in the course of our analysis were removed leaving the important features. <br/> For example, the attribute ‘Country’ was dropped since it is redundant with 100% exact same values of "United States" for all records. 'Postal Code' is also dropped since this attribute is less important towards the profit-centric task. The list of attributes/feature that are important for our analysis are as follows:



                City => City of residence of of the Customer. <br/>
                State => State of residence of the Customer.  <br/>
                Region => Region where the Customer belong.  <br/>
                Category => Category of the product ordered.  <br/>
                Sub-Category => Sub-Category of the product ordered.  <br/>
                Product Name => Name of the Product.  <br/>
                Sales => Sales of the Product.  <br/>
                Quantity => Quantity of the Product.  <br/>
                Discount => Discount provided.  <br/>
                Profit => Profit/Loss incurred. <br/>


                Find the preprocessed dataset at <a href="https://drive.google.com/file/d/1vGWkF3vBHJc-kG7uIeD5_A6G43w50ISs/view"> Superstore DATASET </a> <br/>
                </p>
            </div>       
            <h4 align="center" className="sky"> THE CHARTS </h4>
            <p align="left">  
                Contents of the webpage 


                Member 1 
                Name  - IGARANDO EBINIPRE BIBIAN - B1230374
                Chart type - GROUPED BARCHART
                Link - 



                Member 2 - 
                Name - NAVEENRAO NALLANI - W9543071 
                Chart type - SUNBURST CHART 
                Link - 


                Member 3 
                Name - KODAVATI MAHITHA - W9439813
                Chart type - DONUT CHART 
                Link 


                Member 4
                Name - GUVALA DEEPIKA -W9497107
                Chart type - ZOOMABLE TREE MAP
                Link 


                Member 5
                Name - VEMPATI JASWANT - W9565404
                Chart type - SCATTER PLOT
                Link   

            <div class="widecard">
                <a className="card" href="https://oyewalesbarchart.netlify.app">
                    <div>
                        <h3 class="chart-title">Member 1 </h3>
                        <h4 class="chart-title">Chart Type: GROUPED STACKED BAR CHART</h4>
                        <p class="chart-paragraph">Name: IGARANDO EBINIPRE BIBIAN</p>
                        <p class="chart-paragraph">Student Number: B1230374</p>

                    </div>
                </a>
                <a className="card" href="https://likhitavadapalycircularbarchart.netlify.app/">
                    <div>
                        <h3 class="chart-title">Member 2 </h3>
                        <h4 class="chart-title">Chart Type: SUNBURST CHART</h4>
                        <p class="chart-paragraph">Name: NAVEENRAO NALLANI  </p>
                        <p class="chart-paragraph">Student Number: W9543071</p>
                    </div>
                </a>
                <a className="card" href="https://giftwigbuduslinechart.netlify.app/">
                    <div>
                    <h3 class="chart-title">Member 3 </h3>
                        <h4 class="chart-title">Chart Type: DOUGHNUT CHART</h4>
                        <p class="chart-paragraph">Name: KODAVATI MAHITHA </p>
                        <p class="chart-paragraph">Student Number: W9439813</p>
                    </div>
                </a>
                <a className="card" href="https://giftwigbuduslinechart.netlify.app/">
                    <div>
                    <h3 class="chart-title">Member 4 </h3>
                        <h4 class="chart-title"> Chart Type: ZOOM-ABLE TREE MAP</h4>
                        <p class="chart-paragraph">Name: GUVALA DEEPIKA </p>
                        <p class="chart-paragraph">Student Number: W9497107</p>
                    </div>
                </a>
                <a className="card" href="https://giftwigbuduslinechart.netlify.app/">
                    <div>
                    <h3 class="chart-title">Member 5 </h3>
                        <h4 class="chart-title"> Chart Type: - SCATTER PLOT SCATTER PLOT</h4>
                        <p class="chart-paragraph">Name: VEMPATI JASWANT</p>
                        <p class="chart-paragraph">Student Number: W9565404</p>
                    </div>
                </a>
                
            </div>
            <div className="scrum-link">
                <h3 className="sky" align="center"> SCRUM DOCUMENTATION </h3>
                <p align="center">To view the entire planning process, click the link below </p>
                <p align="center">
                    <a href="https://docs.google.com/spreadsheets/d/1owUIFHjrN1pRiAGGPRhX84ZkpYWh56y_/edit#gid=1392942190">Scrum </a>
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
