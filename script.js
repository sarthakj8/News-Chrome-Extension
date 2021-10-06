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
                    <ul>
                        <li><a href="#home"><button>HOME</button></a></li>
                        <li><a href="#sports"><button onclick="cata=url1">SPORTS</button></a></li>
                        <li><a href="#entertainment"><button  onclick="cata=url2">ENTERTAINMENT</button></a></li>
                        <li><a href="#technology"><button>TECHNOLOGY</button></a></li>
                        <li><a href="#science"><button>SCIENCE</button></a></li>
                        <li><a href="#health"><button>HEALTH</button></a></li>
                        <li><a href="#business"><button>BUSINESS</button></a></li>
                    </ul>
                </div>
                <div>
                    <br><a name="home"></a>
                    <h1>WELCOME TO SPORTS SECTION</h1>This news extension will keep you updated with latest event around you            
                </div>
                <div>
                    <br><a name="sports"></a>${newsTitle1}
                </div>
            `;
        })
    

    // fetch(url2)
    //     .then(response =>{
    //         if(!response.ok){
    //             throw Error('error');
    //             }
    //             return response.json();
    //         })
    //     .then(data =>{
    //         console.log(data.articles);
    //         const newsTitle2=data.articles
    //             .map(article=>{return`
    //                 <div>
    //                     <p><B>${article.title}</B><br><img src="${article.urlToImage}" alt="IMAGE NOT AVAILABLE"></p><br>
    //                 </div><br>
    //                 `;
    //             })
    //             .join('');
    
    //         const newsElement=document.getElementById('newsElement')
    //         newsElement.innerHTML=`
    //             <div>
    //                 <br><a name="entertainment"></a>${newsTitle2}
    //             </div>`;
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     });
    

