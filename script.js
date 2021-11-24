document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("linktobusiness").addEventListener("click", linktobusiness);
    document.getElementById("linktosports").addEventListener("click", linktosports);
    document.getElementById("linktohealth").addEventListener("click", linktohealth);
    document.getElementById("linktoscience").addEventListener("click", linktoscience);
    document.getElementById("linktotechnology").addEventListener("click", linktotechnology);
    document.getElementById("linktoentertainment").addEventListener("click", linktoentertainment);
  });
function linktobusiness(){
let url='https://saurav.tech/NewsAPI/top-headlines/category/business/in.json';

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('error');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.articles);
            const newsTitle1=data.articles
                .map(article=>{
                    return`
                    <div id="news" class="clearfix">
                        <img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"><br><p><B>${article.title}</B></p><br>
                    </div><br>
                    `;
                })
                .join('');

            const newsElement=document.getElementById('newsElement')
            newsElement.innerHTML=`
                <div>
                    <h1>BUSINESS  SECTION</h1>            
                </div>
                <div>
                    ${newsTitle1}
                </div>
            `;
        })
        
}

function linktosports(){
    let url='https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json';

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('error');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.articles);
            const newsTitle1=data.articles
                .map(article=>{
                    return`
                    <div id="news" class="clearfix">
                        <img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"><br><p><B>${article.title}</B></p><br>
                    </div><br>
                    `;
                })
                .join('');

            const newsElement=document.getElementById('newsElement')
            newsElement.innerHTML=`
                <div>
                    <h1>SPORTS  SECTION</h1>       
                </div>
                <div>
                    ${newsTitle1}
                </div>
            `;
        })
}

function linktoentertainment(){
    let url='https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json';

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('error');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.articles);
            const newsTitle1=data.articles
                .map(article=>{
                    return`
                    <div id="news" class="clearfix">
                        <img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"><br><p><B>${article.title}</B></p><br>
                    </div><br>
                    `;
                })
                .join('');

            const newsElement=document.getElementById('newsElement')
            newsElement.innerHTML=`
                <div>
                    <h1>ENTERTAINMENT  SECTION</h1>            
                </div>
                <div>
                    ${newsTitle1}
                </div>
            `;
        })
}

function linktoscience(){
    let url='https://saurav.tech/NewsAPI/top-headlines/category/science/in.json';

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('error');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.articles);
            const newsTitle1=data.articles
                .map(article=>{
                    return`
                    <div id="news" class="clearfix">
                        <img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"><br><p><B>${article.title}</B></p><br>
                    </div><br>
                    `;
                })
                .join('');

            const newsElement=document.getElementById('newsElement')
            newsElement.innerHTML=`
                <div>
                    <h1>SCIENCE  SECTION</h1>            
                </div>
                <div>
                    ${newsTitle1}
                </div>
            `;
        })
}

function linktohealth(){
    let url='https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('error');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.articles);
            const newsTitle1=data.articles
                .map(article=>{
                    return`
                    <div id="news" class="clearfix">
                        <img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"><br><p><B>${article.title}</B></p><br>
                    </div><br>
                    `;
                })
                .join('');

            const newsElement=document.getElementById('newsElement')
            newsElement.innerHTML=`
                <div>
                    
                    <h1>HEALTH  SECTION</h1>            
                </div>
                <div>
                    ${newsTitle1}
                </div>
            `;
        })
}

function linktotechnology(){
    let url='https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('error');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data.articles);
            const newsTitle1=data.articles
                .map(article=>{
                    return`
                    <div id="news" class="clearfix">
                        <img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"><br><p><B>${article.title}</B></p><br>
                    </div><br>
                    `;
                })
                .join('');

            const newsElement=document.getElementById('newsElement')
            newsElement.innerHTML=`
                <div>
                    <h1>TECHNOLOGY  SECTION</h1>            
                </div>
                <div>
                    ${newsTitle1}
                </div>
            `;
        })
}
