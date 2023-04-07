import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";

const AccordianContentLeft = () => {
  const [isCollapseFirst, setIsCollapseFirst] = useState(false);
  const toggleFirst = () => setIsCollapseFirst(!isCollapseFirst);

  const [isCollapseSecond, setIsCollapseSecond] = useState(false);
  const toggleSecond = () => setIsCollapseSecond(!isCollapseSecond);

  const [isCollapseThird, setIsCollapseThird] = useState(false);
  const toggleThird = () => setIsCollapseThird(!isCollapseThird);

  const [isCollapseFourth, setIsCollapseFourth] = useState(false);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

  const [isCollapseFifth, setIsCollapseFifth] = useState(false);
  const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

  const [isCollapseSixth, setIsCollapseSixth] = useState(false);
  const toggleSixth = () => setIsCollapseSixth(!isCollapseSixth);

  const [newsData, setNewsData] = useState([]);
  const [isOpen, setIsOpen] = useState(new Array(newsData.length).fill(false));

  const toggleAccordion = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

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
    // <React.Fragment>
    //   <div className="accordion-item mt-4 border-0">
    //     <h2 className="accordion-header" id="buyingone">
    //       <button
    //         className="accordion-button"
    //         onClick={toggleFirst}
    //         type="button"
    //       >
    //         Newcrest Employees awarded Australian Scholarships
    //       </button>
    //     </h2>
    //     <Collapse isOpen={isCollapseFirst} id="buying-one">
    //       <div className="accordion-body" style={{ lineHeight: "2em" }}>
    //         Newcrest Employees awarded Australian Scholarships <br />
    //         Source: Postcourier <br />
    //         November 1, 2018 <br />
    //         Newcrest congratulated its Lihir employees Lyndon Gorie and Kelvin
    //         Gurra, who have received prestigious Australia Awards scholarships
    //         to undertake further study in Australia, beginning in 2019. Lyndon -
    //         <div className="learn-more">
    //           <Link to="/readmore" className="form-text text-primary">
    //             Read More <i className="uil uil-angle-right-b"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </Collapse>
    //   </div>

    //   <div className="accordion-item mt-4 border-0">
    //     <h2 className="accordion-header" id="buyingtwo">
    //       <button
    //         className="accordion-button"
    //         onClick={toggleSecond}
    //         type="button"
    //       >
    //         NulPower Plant 80% complete
    //       </button>
    //     </h2>
    //     <Collapse isOpen={isCollapseSecond} id="buying-two">
    //       <div className="accordion-body" style={{ lineHeight: "2em" }}>
    //         Source: Postcourier <br />
    //         November 1, 2018 <br />
    //         BY MATTHEW VARI
    //         <br />
    //         The NiuPower gas fired plant being built outside the PNG LNG Plant
    //         site outside of Port Moresby is 80 per cent complete and set for
    //         completion in December this year. In a site visit yesterday by
    //         Deputy Prime Minister Charles Abel
    //         <div className="learn-more">
    //           <Link
    //             to="/readmorenewsnullpowerplant"
    //             className="form-text text-primary"
    //           >
    //             Read More <i className="uil uil-angle-right-b"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </Collapse>
    //   </div>

    //   <div className="accordion-item mt-4 border-0">
    //     <h2 className="accordion-header" id="buyingthree">
    //       <button
    //         className="accordion-button"
    //         onClick={toggleThird}
    //         type="button"
    //       >
    //         New owner expected for Crowne Plaza
    //       </button>
    //     </h2>
    //     <Collapse isOpen={isCollapseThird} id="buying-three">
    //       <div className="accordion-body" style={{ lineHeight: "2em" }}>
    //         October 31, 2018 <br /> Source The National Business
    //         <br />
    //         One of Port Moresby's four-star hotels, the Crowne Plaza, is
    //         expected to change ownership at The hotel, with bigger shares owned
    //         by Nambawan Super Ltd, has been on the market to sell the end of
    //         this week. for a period of time.{" "}
    //         <div className="learn-more">
    //           <Link
    //             to="/readmorenewsNewOwner"
    //             className="form-text text-primary"
    //           >
    //             Read More <i className="uil uil-angle-right-b"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </Collapse>
    //   </div>

    //   <div className="accordion-item mt-4 border-0">
    //     <h2 className="accordion-header" id="buyingthree">
    //       <button
    //         className="accordion-button"
    //         onClick={toggleFourth}
    //         type="button"
    //       >
    //         Hidden Valley pays millions in taxes and royalties
    //       </button>
    //     </h2>
    //     <Collapse isOpen={isCollapseFourth} id="buying-three">
    //       <div className="accordion-body" style={{ lineHeight: "2em" }}>
    //         October 31, 2018 <br /> Source The National Business
    //         <br />
    //         HIDDEN Valley mine in Bulolo, Morobe, has so far paid K421 million
    //         in taxes and royalties Harmony South East Asia operations chief
    //         executive Johannes van Heerden and operation executive manager
    //         Charles Devillie revealed this during a Lae Chamber of Commerce and
    //         while contributing K591 million into the regional economy.
    //         <div className="learn-more">
    //           <Link
    //             to="/readmorenewsHiddenValley"
    //             className="form-text text-primary"
    //           >
    //             Read More <i className="uil uil-angle-right-b"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </Collapse>
    //   </div>

    //   <div className="accordion-item mt-4 border-0">
    //     <h2 className="accordion-header" id="buyingthree">
    //       <button
    //         className="accordion-button"
    //         onClick={toggleFifth}
    //         type="button"
    //       >
    //         Record production levels help Oil Search return strong result
    //       </button>
    //     </h2>
    //     <Collapse isOpen={isCollapseFifth} id="buying-three">
    //       <div className="accordion-body" style={{ lineHeight: "2em" }}>
    //         October 31, 2018 <br /> Source The National Business
    //         <br />
    //         One of Port Moresby's four-star hotels, the Crowne Plaza, is
    //         expected to change ownership at The hotel, with bigger shares owned
    //         by Nambawan Super Ltd, has been on the market to sell the end of
    //         this week. for a period of time.{" "}
    //         <div className="learn-more">
    //           <Link
    //             to="/readmorenewsRecordProduction"
    //             className="form-text text-primary"
    //           >
    //             Read More <i className="uil uil-angle-right-b"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </Collapse>
    //   </div>

    //   <div className="accordion-item mt-4 border-0">
    //     <h2 className="accordion-header" id="buyingthree">
    //       <button
    //         className="accordion-button"
    //         onClick={toggleSixth}
    //         type="button"
    //       >
    //         Trukai says Aust rice tour a useful lesson for PNG
    //       </button>
    //     </h2>
    //     <Collapse isOpen={isCollapseSixth} id="buying-three">
    //       <div className="accordion-body" style={{ lineHeight: "2em" }}>
    //         October 26, 2018 <br /> Source The National Business
    //         <br />
    //         The recent tour of the Riverina rice-growing region of Australia has
    //         been hailed a success by the participating delegates from Papua New
    //         Guinea. The tour provided PNG delegates the opportunity to see how
    //         commercial rice farming was done in Australia.{" "}
    //         <div className="learn-more">
    //           <Link to="/readmoreTurkai" className="form-text text-primary">
    //             Read More <i className="uil uil-angle-right-b"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </Collapse>
    //   </div>
    // </React.Fragment>
    <div>
      {newsData.length === 0 ? (
        <p className="accordion-header">No data found</p>
      ) : (
        newsData.map((item, index) => (
          <div className="accordion-item mt-4 border-0" key={item.id}>
            <h2 className="accordion-header" id={item.id}>
              <button
                className="accordion-button"
                onClick={() => toggleAccordion(index)}
              >
                {item.news_title}
              </button>
            </h2>
            <Collapse isOpen={isOpen[index]}>
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
        ))
      )}
    </div>
  );
};

export default AccordianContentLeft;
