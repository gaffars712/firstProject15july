import React from "react";
import Cardbody from "./Cardbody";
import Spinner from "./Spinner";
export default class Cardcamponent extends React.Component {
  
  // static defultProps ={
  //   catogry: "general"
  // }
  // static PropTypes ={   
  //   catogry:PropTypes.string,
  // }
  articalse = [
    // {
    // "source": {
    // "id": null,
    // "name": "CNBC"
    // },
    // "author": "Jihye Lee, Lim Hui Jie",
    // "title": "Asia markets mixed as more U.S. inflation data comes in softer than expected - CNBC",
    // "description": "The producer price index in the U.S., which measures what wholesalers pay for goods, rose 0.1% in June.",
    // "url": "https://www.cnbc.com/2023/07/14/asia-markets.html",
    // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107162264-1670379611145-gettyimages-1243657434-JAPAN_TANKAN.jpeg?v=1689291895&w=1920&h=1080",
    // "publishedAt": "2023-07-14T01:51:00Z",
    // "content": "Asia-Pacific markets were mixed on Friday after more inflation data out from the U.S. came in softer than expected, raising optimism that inflation could come down without weakening the labor market.… [+1347 chars]"
    // },
    // {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "",
    // "title": "Video shows New Zealand's White Island volcano eruption in 2019 - CNN",
    // "description": "Footage showing tourists fleeing for their lives during the 2019 eruption of the White Island volcano in New Zealand has been shown during a landmark trial into the incident.",
    // "url": "https://www.cnn.com/videos/world/2023/07/13/new-zealand-white-island-volcano-trial-lon-orig.cnn",
    // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230713174753-nz-volcano-court-dv-1.jpg?c=16x9&q=w_800,c_fill",
    // "publishedAt": "2023-07-14T01:36:39Z",
    // "content": null
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "YouTube"
    // },
    // "author": null,
    // "title": "FTC launches investigation into ChatGPT - CBS Evening News",
    // "description": "The Federal Trade Commission has launched an investigation into whether OpenAI, the company which developed the artificial intelligence bot ChatGPT, has brok...",
    // "url": "https://www.youtube.com/watch?v=SNm223KY78g",
    // "urlToImage": "https://i.ytimg.com/vi/SNm223KY78g/maxresdefault.jpg",
    // "publishedAt": "2023-07-14T00:55:06Z",
    // "content": null
    // },
    // {
    // "source": {
    // "id": "associated-press",
    // "name": "Associated Press"
    // },
    // "author": "LARRY NEUMEISTER",
    // "title": "Founder of student aid startup Frank shakes head as prosecutor describes case against her - The Associated Press",
    // "description": "The founder of student aid startup Frank shook her head repeatedly as a prosecutor claimed she tricked J.P. Morgan Chase into paying $175 million for her ${this.props.catogry} by lying about its client base. The Manhattan federal prosecutor described the criminal case aga…",
    // "url": "https://apnews.com/article/frank-founder-charlie-javice-lawsuit-5e990e78598507a08863836648d29aad",
    // "urlToImage": "https://dims.apnews.com/dims4/default/b6fc954/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb5%2Fdd%2F001ef55274b7d72501642d7cb199%2F081e9ffd46354116a0894b9a3748c610",
    // "publishedAt": "2023-07-14T00:51:00Z",
    // "content": "NEW YORK (AP) The founder of student aid startup Frank shook her head repeatedly Thursday as a prosecutor claimed that she tricked J.P. Morgan Chase into paying $175 million for her ${this.props.catogry} by lying… [+2344 chars]"
    // },
    // {
    // "source": {
    // "id": "usa-today",
    // "name": "USA Today"
    // },
    // "author": "Doc Louallen",
    // "title": "55-pound rabid beaver attacks young girl at Georgia lake before her father kills animal - USA TODAY",
    // "description": "A rabid beaver bit a young girl while she was swimming at northeast Georgia's Lake Lanier before her father beat the animal to death.",
    // "url": "https://www.usatoday.com/story/news/nation/2023/07/13/rabid-beaver-georgia-lake-lanier/70412314007/",
    // "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/14/USAT/a8d06c33-21d3-4376-b6e2-d991f3e58be4-AP_Grieving_Mom_Drain_Lake_Petition.jpg?crop=5103,2871,x0,y128&width=3200&height=1801&format=pjpg&auto=webp",
    // "publishedAt": "2023-07-14T00:12:29Z",
    // "content": "A young girl was attacked by a 55-pound rabid beaver Monday in Gainesville, Georgia, while she was swimming at a nearby lake, the Associated Press reported.\r\nThe incident happened just after 4:00 p.m… [+901 chars]"
    // },
    // {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "Lauren Fox, Clare Foran, Melanie Zanona, Haley Talbot, Annie Grayer",
    // "title": "House adopts controversial amendments as defense bill passage hangs in the balance - CNN",
    // "description": "The House voted Thursday evening to adopt several controversial amendments pushed by conservative hardliners to a critical national defense bill as the fate of the must-pass legislation hangs in the balance.",
    // "url": "https://www.cnn.com/2023/07/13/politics/ndaa-abortion-controversial-votes/index.html",
    // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230528141212-03-kevin-mccarthy-debt-ceiling-0528.jpg?c=16x9&q=w_800,c_fill",
    // "publishedAt": "2023-07-13T23:59:00Z",
    // "content": "The House voted Thursday evening to adopt several controversial amendments pushed by conservative hardliners to a critical national defense bill as the fate of the must-pass legislation hangs in the … [+6415 chars]"
    // },
    // {
    // "source": {
    // "id": "nfl-news",
    // "name": "NFL News"
    // },
    // "author": "Kevin Patra",
    // "title": "NFL expected to announce New York Jets will be featured on 'Hard Knocks' in 2023 - NFL.com",
    // "description": "The NFL is expected to announce on Friday morning that the New York Jets will be featured on the HBO training camp series, \"Hard Knocks,\" in 2023.",
    // "url": "https://www.nfl.com/news/new-york-jets-hard-knocks-training-camp-2023",
    // "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/fcggv9ermap7kxdyftn9",
    // "publishedAt": "2023-07-13T23:01:00Z",
    // "content": "The Jets were one of four teams eligible for the show without volunteering -- others being the Chicago Bears, New Orleans Saints and Washington Commanders.\r\nNew York reports for training camp six day… [+324 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "NBCSports.com"
    // },
    // "author": "Charean Williams",
    // "title": "Jets announce deal with Quinnen Williams - NBC Sports",
    // "description": "The Jets announced their long-term deal with defensive tackle Quinnen Williams on Thursday.",
    // "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/jets-announce-deal-with-quinnen-williams",
    // "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/25173bd/2147483647/strip/true/crop/5592x3146+0+291/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F74%2F3d%2Ff11f14a54061a2d5c23d2f701037%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D19375185",
    // "publishedAt": "2023-07-13T22:29:25Z",
    // "content": "The Jets announced their long-term deal with defensive tackle Quinnen Williams on Thursday. \r\nWe are thrilled to secure Quinnen as a New York Jet for the foreseeable future, as he embodies everything… [+2148 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "Android Police"
    // },
    // "author": "Cody Lee",
    // "title": "Prime Day pricing on Samsung's The Frame TV is still available, but not for long - Android Police",
    // "description": "Save 33% on Samsung's ultra-slim 75&quot; 4K TV",
    // "url": "https://www.androidpolice.com/samsung-the-frame-tv-prime-day-deal/",
    // "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/10/Samsung-Frame-TV-Lifestyle-2020.jpg",
    // "publishedAt": "2023-07-13T21:40:00Z",
    // "content": "Samsung The Frame 75-inch 4K QLED TV (2022) \r\nFor an ultra-slim 4K TV that can blend in with any decor, check out The Frame from Samsung. It has an anti-reflection matte display, Quantum HDR, built-i… [+2138 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "Hollywood Reporter"
    // },
    // "author": "Tyler Coates",
    // "title": "Taraji P. Henson, Bill Hader, Padma Lakshmi and More Emmy Nominees on Historic SAG and WGA Strikes: “This Will Be a Chance To Lift Each Other Up” - Hollywood Reporter",
    // "description": "\"Nobody wants to be in an abusive relationship in which one group kind of lords over the other,\" says 'Black Bird' nominee Paul Walter Hauser.",
    // "url": "https://www.hollywoodreporter.com/tv/tv-news/taraji-p-henson-bill-hader-padma-lakshmi-emmy-nominees-sag-wga-strike-1235535715/",
    // "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/taraji-bill-padma-williams.jpg?w=1024",
    // "publishedAt": "2023-07-13T20:53:25Z",
    // "content": "The announcement of the 75th annual Emmy Award nominations brought as much chaos as it did joy and celebration on Wednesday, as some of television’s most honored stars were expecting the SAG-AFTRA st… [+8554 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "KXAN.com"
    // },
    // "author": "Julianna Russ, Sarah Al-Shaikh",
    // "title": "Abbott orders additional troopers to Austin 1 day after city suspends APD/DPS partnership - KXAN.com",
    // "description": "On Thursday, Gov. Greg Abbott ordered an additional 30 Texas Department of Public Safety troopers to Austin, according to a spokesperson with DPS.",
    // "url": "https://www.kxan.com/news/local/austin/abbott-orders-additional-troopers-to-austin-1-day-after-city-suspends-apd-dps-partnership/",
    // "urlToImage": "https://www.kxan.com/wp-content/uploads/sites/40/2023/05/abbottgreg_03152023getty.jpg?w=1280",
    // "publishedAt": "2023-07-13T20:46:58Z",
    // "content": "AUSTIN (KXAN) On Thursday, Gov. Greg Abbott ordered an additional 30 Texas Department of Public Safety troopers to Austin, according to a spokesperson with DPS.\r\nThe order comes one day after the Cit… [+3178 chars]"
    // },
    // {
    // "source": {
    // "id": "reuters",
    // "name": "Reuters"
    // },
    // "author": "Diane Bartz, David Shepardson",
    // "title": "US FTC asks court to halt Microsoft's acquisition of Activision - Reuters",
    // "description": "The U.S. Federal Trade Commission asked a federal court on Thursday to order Microsoft <a href=\"https://www.reuters.com/markets/companies/MSFT.O\" target=\"_blank\">(MSFT.O)</a> to hold off on closing its <a href=\"/markets/deals/whats-next-after-us-judge-rules-f…",
    // "url": "https://www.reuters.com/legal/us-ftc-asks-court-temporarily-halt-microsofts-acquisition-activision-2023-07-13/",
    // "urlToImage": "https://www.reuters.com/resizer/i8NyI8kLcqmjIpbrxni2TPZUjKI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2ZW332IEAJOODJ4V627BDQASUQ.jpg",
    // "publishedAt": "2023-07-13T20:42:00Z",
    // "content": "WASHINGTON, July 13 (Reuters) - The U.S. Federal Trade Commission asked a federal court on Thursday to order Microsoft (MSFT.O) to hold off on closing its $69 billion purchase of \"Call of Duty\" maker… [+3465 chars]"
    // },
    // {
    // "source": {
    // "id": "abc-news",
    // "name": "ABC News"
    // },
    // "author": "Will Steakin",
    // "title": "DeSantis weighs media strategy shift as donors fret about early campaign struggles: Sources - ABC News",
    // "description": "Top donors have been privately fretting about DeSantis' chances, sources say.",
    // "url": "https://abcnews.go.com/US/desantis-weighs-media-strategy-shift-donors-fret-early/story?id=101218101",
    // "urlToImage": "https://s.abcnews.com/images/Politics/DeSantis-1-ap-er-230706_1688673371042_hpMain_16x9_992.jpg",
    // "publishedAt": "2023-07-13T20:36:16Z",
    // "content": "Only seven weeks into his 2024 campaign for the White House, Ron DeSantis is struggling to make a dent in former President Donald Trump's commanding lead in the Republican primary -- and the Florida … [+5750 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "BBC News"
    // },
    // "author": "https://www.facebook.com/bbcnews",
    // "title": "Stars leave Oppenheimer premiere as Hollywood actors announce strike - BBC",
    // "description": "Some 160,000 performers will stop work, bringing most US film and TV productions to a halt.",
    // "url": "https://www.bbc.com/news/entertainment-arts-66196357",
    // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1C6D/production/_130377270_gettyimages-1540929932.jpg",
    // "publishedAt": "2023-07-13T20:03:58Z",
    // "content": "Media caption, Watch: 'It's going to be a dystopia' - Fran Drescher \r\nThe Screen Actors Guild has announced it will go on strike, marking the start of the largest shutdown Hollywood has seen in 40 ye… [+5133 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "CBS Sports"
    // },
    // "author": "",
    // "title": "10 milestones within reach for LeBron James as Lakers star returns for his 21st NBA season - CBS Sports",
    // "description": "James will turn 39 in December, and there are still some records for him to break",
    // "url": "https://www.cbssports.com/nba/news/10-milestones-within-reach-for-lebron-james-as-lakers-star-returns-for-his-21st-nba-season/",
    // "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/13/2153f18b-c5c7-481d-938c-641e1bf52c29/thumbnail/1200x675/ead636a85fc2f7d817222c5b0f5baa11/lebron-james-getty-8.png",
    // "publishedAt": "2023-07-13T19:30:30Z",
    // "content": "LeBron James\r\nshocked the world \r\nconfirmed what we all knew on Wednesday, announcing that he will return to the Los Angeles Lakers for the 2023-24 season. It will be his 21st season in the NBA, and … [+6886 chars]"
    // },
    // {
    // "source": {
    // "id": "reuters",
    // "name": "Reuters"
    // },
    // "author": "Will Dunham",
    // "title": "NASA rover reveals new evidence about organic molecules on Mars - Reuters",
    // "description": "Evidence is mounting about what may be a wealth of organic molecules - a potential indicator of life - on Mars, with new findings from NASA's Perseverance rover suggesting the presence of a diversity of them in rocks at a locale where a lake existed long ago.",
    // "url": "https://www.reuters.com/technology/space/nasa-rover-reveals-new-evidence-about-organic-molecules-mars-2023-07-13/",
    // "urlToImage": "https://www.reuters.com/resizer/CqIcDTrSDrEIBfBZQeEgvqt424g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LGG53O55YZPPDDZGLNMKS3YS7E.jpg",
    // "publishedAt": "2023-07-13T19:24:55Z",
    // "content": "WASHINGTON, July 13 (Reuters) - Evidence is mounting about what may be a wealth of organic molecules - a potential indicator of life - on Mars, with new findings from NASA's Perseverance rover sugges… [+4026 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "The Guardian"
    // },
    // "author": "Tumaini Carayol",
    // "title": "Ons Jabeur digs deep to battle past Aryna Sabalenka into Wimbledon final - The Guardian",
    // "description": "The Tunisian Ons Jabeur, last year’s Wimbledon runner-up, reached the final for the second year in a row, by defeating Aryna Sabalenka 6-7 (5), 6-4, 6-3",
    // "url": "https://www.theguardian.com/sport/2023/jul/13/ons-jabeur-digs-deep-to-battle-past-aryna-sabalenka-into-wimbledon-final",
    // "urlToImage": "https://i.guim.co.uk/img/media/fe69ebf0aacd674f483a6826d6ba135ac2df15c8/0_106_5508_3305/master/5508.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5d904f15a929560d576175cdb28adb80",
    // "publishedAt": "2023-07-13T19:02:00Z",
    // "content": "Earlier this year, long after her unforgettable trailblazing run to her maiden grand slam final, Ons Jabeur was forced to relive the joy, hope and eventual pain of that fortnight once more. As she an… [+13566 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "New York Post"
    // },
    // "author": "Brooke Kato",
    // "title": "Nearly 1 in 10 US kids diagnosed with developmental disability: CDC - New York Post ",
    // "description": "The number of American children that have been diagnosed with developmental disabilities has increased, the Centers for Disease Control and Prevention reported.",
    // "url": "https://nypost.com/2023/07/13/nearly-1-in-10-us-kids-diagnosed-with-developmental-disability-cdc/",
    // "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-hepzk3g5g-1689274087865.jpg?quality=75&strip=all&1689260413&w=1024",
    // "publishedAt": "2023-07-13T18:46:00Z",
    // "content": "The number of American children that have been diagnosed with developmental disabilities has increased, the Centers for Disease Control and Prevention reported.\r\nThe agency unveiled new findings Thur… [+3147 chars]"
    // },
    // {
    // "source": {
    // "id": "the-washington-post",
    // "name": "The Washington Post"
    // },
    // "author": "Nic Wirtz, Mary Beth Sheridan",
    // "title": "Guatemala court suspends anticorruption Semilla party of Bernardo Arévalo - The Washington Post",
    // "description": "The United States warned that the Central American country's democracy is again in peril.",
    // "url": "https://www.washingtonpost.com/world/2023/07/13/guatemala-semilla-arevalo-anti-corrupton/",
    // "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WILUTVE2YVRQHPFMG3PDCYI4NM.JPG&w=1440",
    // "publishedAt": "2023-07-13T18:43:00Z",
    // "content": "Comment on this story\r\nComment\r\nGUATEMALA CITY Guatemala was plunged into a political crisis on Thursday when a court disqualified the party of a maverick anti-corruption candidate just weeks before … [+5807 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "YouTube"
    // },
    // "author": null,
    // "title": "July 6 was the hottest day ever recorded on Earth - 9NEWS",
    // "description": null,
    // "url": "https://www.youtube.com/watch?v=p9T69KNY8Bk",
    // "urlToImage": null,
    // "publishedAt": "2023-07-13T18:16:42Z",
    // "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    // }
    ]

    constructor(){

    super();
    this.state ={
      articalse : this.articalse,
      loading : false,
      page:1
    }}
     fachdatamount =async()=>{
      this.props.progressbar(50)

      const  url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catogry}&apiKey=${this.props.apikey}&page=1&pageSize=6`;
    this.setState({loading:true})
    const data = await fetch(url);
    const passdata = await data.json();
    this.setState({loading:false})
    console.log("pasdata gaffar",passdata)
    this.props.progressbar(100)
    this.setState({articalse: passdata.articles,
      page: this.state.page,
     loading:false
     });
    }
    componentDidMount(){
    this.fachdatamount()
    // this.props.progressbar(50)

    //   const  url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catogry}&apiKey=137d3c43a4244e2b8e78a05297299511&page=1&pageSize=6`;
    // this.setState({loading:true})
    // const data = await fetch(url);
    // const passdata = await data.json();
    // this.setState({loading:false})
    // console.log("pasdata",passdata)
    // this.props.progressbar(100)
    // this.setState({articalse: passdata.articles,
    //   page: this.state.page,
    //  loading:false
    //  });
    };
    //   prviousbutoon = async ()=>{
    //   this.props.progressbar(20)
    //     console.log("privies")
    //   const  url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catogry}&apiKey=cd424eb4910340fc81bc4578e4a86d86&page=${this.state.page - 1}&pageSize=6`;
    // this.setState({loading:true})
    // const data = await fetch(url);
    // this.props.progressbar(50)
    // const passdata = await data.json();
    // this.setState({loading:false})
    // this.props.progressbar(100)
    // this.setState({articalse: passdata.articles ,
    // page:this.state.page -1,
    // loading:false});


    // };
    // nextbutton = async ()=>{
    //   this.props.progressbar(30)
    //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catogry}&apiKey=cd424eb4910340fc81bc4578e4a86d86&page=${this.state.page + 1}&pagesize=6`;
    // this.setState({loading:true})
    // this.props.progressbar(50)
    //   const data = await fetch(url);
    //   const passdata = await data.json();
    // this.setState({loading:false})
    // this.props.progressbar(100)
    //   this.setState({ page: this.state.page + 1,
    //     articalse: passdata.articles , loading:false
    //  });
    // };
  
  render() {
{  document.title=` News Monkey - ${this.props.catogry.charAt(0).toUpperCase() + this.props.catogry.slice(1)}`}

  return (<>
  <h1 id="h1color" className="mt-5 mb-0 text-center">{`News Monkey ${this.props.catogry.charAt(0).toUpperCase() + this.props.catogry.slice(1)}`}</h1>

    <div className="container-fluid">
       { this.state.loading && <Spinner/>}
      <div className="row">
      {this.state.articalse.map((item)=>{return(
        

        <div className="col-12 col-lg-4" key= {item.url}>        
        <Cardbody carttitle= {item.title} carddis={item.description} cardimg = {item.urlToImage} newsurl= {item.url} author={item.author?item.author:"Unknown"} publishdate={item.publishedAt} sursename ={item.source.name}/>
        </div>
        )
        })}
      </div>
      <div className=" d-flex justify-content-between " style={{margin:"1rem 2rem 1rem 2rem"}}>
                {/* <button type="button" disabled = {this.state.page<=1} style={{width:"auto"}}  onClick={ this.prviousbutoon} className=" btn-dark rounded" >&larr; Previous </button>
                <button type="button" disabled = {this.state.page >=50}  onClick={this.nextbutton} className="btnl btn-dark rounded"style={{height:"40px", width:"auto"}} >Next &rarr; </button> */}

                </div>
                </div>
                </>
      )
  }
}