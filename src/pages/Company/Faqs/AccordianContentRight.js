import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";

const AccordianContentRight = () => {
  //Collapse Tab

  const [isCollapseFourth, setIsCollapseFourth] = useState(false);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

  const [isCollapseFifth, setIsCollapseFifth] = useState(false);
  const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

  const [isCollapseSixth, setIsCollapseSixth] = useState(false);
  const toggleSixth = () => setIsCollapseSixth(!isCollapseSixth);

  const [isCollapseSeventh, setIsCollapseSeventh] = useState(false);
  const toggleSeventh = () => setIsCollapseSeventh(!isCollapseSeventh);

  const [isCollapseEigth, setIsCollapseEigth] = useState(false);
  const toggleEigth = () => setIsCollapseEigth(!isCollapseEigth);

  const [isCollapseNinth, setIsCollapseNinth] = useState(false);
  const toggleNinth = () => setIsCollapseNinth(!isCollapseNinth);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/spacificmanpower/trendingnews/")
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    //         <React.Fragment>
    //             <div className="accordion-item mt-4 border-0">
    //                 <h2 className="accordion-header" id="generalfour">
    //                     <button className="accordion-button" onClick={toggleFourth} type="button" >
    //                     Morobe Show
    //                     </button>
    //                 </h2>
    //                 <Collapse isOpen={isCollapseFourth} id="general-four">
    //                     <div className="accordion-body" style={{lineHeight:'2em'}}>
    //                     Source Postcourier <br/>
    //                         October 31, 2018 <br/>
    //                         The 57th Morobe Show in Lae over the weekend was hailed a success for PNG's leading rice distributor, Trukai Industries Ltd, as it took out the best exhibit and the grand winner of the
    // 2018 Morobe Agricultural Show.
    // Trukai Industries Ltd Chief Executive
    // <div className="learn-more">
    //                     <Link to="/readmoreMorobe" className="form-text text-primary" >Read More <i className="uil uil-angle-right-b"></i></Link>
    //                                         </div>
    //                     </div>
    //                 </Collapse>
    //             </div>

    //             <div className="accordion-item mt-4 border-0">
    //                 <h2 className="accordion-header" id="generalfive">
    //                     <button className="accordion-button" onClick={toggleFifth} type="button">
    //                     Newcrest has contributed US$377 million
    //                     </button>
    //                 </h2>
    //                 <Collapse isOpen={isCollapseFifth} id="general-five">
    //                     <div className="accordion-body" style={{lineHeight:'2em'}}>
    //                     Source Post Courier <br/>
    // October 31, 2018<br/>
    // Newcrest has contributed US$377 million to its national account through acquisition of K1.18 billion of currency in the 2018 financial year.
    // This makes the company one of the largest contributors of foreign exchange in the country.
    // <div className="learn-more">
    //                     <Link to="/readmoreNewCrest" className="form-text text-primary" >Read More <i className="uil uil-angle-right-b"></i></Link>
    //                                         </div>
    //                     </div>
    //                 </Collapse>
    //             </div>

    //             <div className="accordion-item mt-4 border-0">
    //                 <h2 className="accordion-header" id="generalsix">
    //                     <button className="accordion-button" onClick={toggleSixth} type="button">
    //                     Lihir Gold mine's contribution to government and landowners
    //                     </button>
    //                 </h2>
    //                 <Collapse isOpen={isCollapseSixth} id="general-six">
    //                     <div className="accordion-body" style={{lineHeight:'2em'}}>
    //                     Source Post Courier <br/>
    // October 31, 2018<br/>
    // Lihir Gold mine's contribution to government and landowners rounded off at K269 million as of the close of its 2018 financial year in June.
    // Newcrest's gold mine at Lihir makes a substantial contribution to PNG government revenue through payment of taxes, royalties, and expenditure on approved infrastructure projects.
    // <div className="learn-more">
    //                     <Link to="/readmoreLihirGold" className="form-text text-primary" >Read More <i className="uil uil-angle-right-b"></i></Link>
    //                                         </div>

    //                     </div>
    //                 </Collapse>
    //             </div>

    //             <div className="accordion-item mt-4 border-0">
    //                 <h2 className="accordion-header" id="generalsix">
    //                     <button className="accordion-button" onClick={toggleSeventh} type="button">
    //                     New gas deals showing promise
    //                     </button>
    //                 </h2>
    //                 <Collapse isOpen={isCollapseSeventh} id="general-six">
    //                     <div className="accordion-body" style={{lineHeight:'2em'}}>
    //                     October 24, 2018. <br/>Source: The National Business <br/>

    //                     Discussions are continuing between the PNG LNG Project, the P'nyang (PRL3) and Papua LNG
    // (PRL15) joint ventures on the proposed development of three new LNG trains at the PNG LNG
    // plant site, says Oil Search managing director Peter Botten.
    // Two are underwritten by Papua LNG and one by the PNG LNG and P'nyang gas fields, Botton
    // <div className="learn-more">
    //                     <Link to="/readmoreNewGas" className="form-text text-primary" >Read More <i className="uil uil-angle-right-b"></i></Link>
    //                                         </div>

    //                     </div>
    //                 </Collapse>
    //             </div>

    //             <div className="accordion-item mt-4 border-0">
    //                 <h2 className="accordion-header" id="generalsix">
    //                     <button className="accordion-button" onClick={toggleEigth} type="button">
    //                     Landowners oppose Lae's coal-fired project
    //                     </button>
    //                 </h2>
    //                 <Collapse isOpen={isCollapseEigth} id="general-six">
    //                     <div className="accordion-body" style={{lineHeight:'2em'}}>
    //                    October 24,2018 <br/>
    // Source ,The National Business<br/>
    // OIL Search reported a strong third-quarter result, delivering the company's highest quarterly revenue since the fourth quarter of 2014, and approached the end of 2018 in a robust
    // financial position.
    // Managing director Peter Botten said total oil and gas production was 7.5 million barrels of oil
    // <div className="learn-more">
    //                     <Link to="/readmoreLandowners" className="form-text text-primary" >Read More <i className="uil uil-angle-right-b"></i></Link>
    //                                         </div>

    //                     </div>
    //                 </Collapse>
    //             </div>

    //             <div className="accordion-item mt-4 border-0">
    //                 <h2 className="accordion-header" id="generalsix">
    //                     <button className="accordion-button" onClick={toggleNinth} type="button">
    //                     NKW Group of Companies has launched a new corporate logo

    //                     </button>
    //                 </h2>
    //                 <Collapse isOpen={isCollapseNinth} id="general-six">
    //                     <div className="accordion-body" style={{lineHeight:'2em'}}>
    //                    October 24,2018 <br/>
    // Source ,The National Business<br/>
    // OIL Search reported a strong third-quarter result, delivering the company's highest quarterly revenue since the fourth quarter of 2014, and approached the end of 2018 in a robust
    // financial position.
    // Managing director Peter Botten said total oil and gas production was 7.5 million barrels of oil
    // <div className="learn-more">
    //                     <Link to="#" className="form-text text-primary" >Read More <i className="uil uil-angle-right-b"></i></Link>
    //                                         </div>

    //                     </div>
    //                 </Collapse>
    //             </div>

    //         </React.Fragment>
    <div>
      {newsData.map((item) => (
        <div className="accordion-item mt-4 border-0">
          <h2 className="accordion-header" id={item.id}>
            <button className="accordion-button" onClick={toggleFourth}>
              {item.news_title}
            </button>
          </h2>
          <Collapse isOpen={isCollapseFourth}>
            <div className="accordion-body" style={{ lineHeight: "2em" }}>
              {item.news_description}
              <div className="learn-more">
                <Link
                  to={`/readmore/${item.id}`}
                  className="form-text text-primary"
                >
                  Read More <i className="uil uil-angle-right-b"></i>
                </Link>
              </div>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default AccordianContentRight;
