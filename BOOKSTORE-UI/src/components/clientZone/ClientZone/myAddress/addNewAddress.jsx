import React, { useState } from "react";
const AddNewAddress = ({ isVisable, onClose }) => {
  const [newAddress, setNewAddress] = useState();
  if (!isVisable) return null;
  // hundleValue = (e)=>{
  //   const{name,value} =e.target
  //   this.
  // }
  return (
    <div className="modal-backdrop in w-100 ">
      <div className="modal-header container w-75 fs-3 ">
        <h4 className="modal-title">Add New Address</h4>
        <button
          type="button"
          className="bootbox-close-button close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={() => onClose()}
        >
          ×
        </button>
      </div>
      <div className="bg-white rounded w-md-50 m-auto d-block pt-3">
        <div className="modal-content ps-5 pe-5">
          <form
            id="clientProfile"
            encType="multipart/form-data"
            className="ps-md-5 pe-md-5 h-100"
          >
            <div className="row ps-md-5 pe-md-5">
              <div className="col-xs-12 col-md-6">
                {/* First name */}
                <div className="col-xs-6">
                  <div className="form-group softLabel">
                    <label htmlFor="name" className>
                      Full Name&nbsp;<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required="please Enter your Address ?"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                {/* City */}
                <div className="col-xs-6">
                  <div className="form-group softLabel">
                    <label htmlFor="city">
                      City&nbsp;<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required="please Enter your Address ?"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                {/* Country */}
                <div className="form-group">
                  <label htmlFor="country" className>
                    Country&nbsp;<span>*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="form-control country form-select"
                    aria-label="Default select example"
                  >
                    <option value="EGY">Egypt</option>
                    <option value="ALA">Aland Islands</option>{" "}
                    <option value="ALB">Albania</option>{" "}
                    <option value="DZA">Algeria</option>{" "}
                    <option value="ASM">American Samoa</option>{" "}
                    <option value="AND">Andorra</option>{" "}
                    <option value="AGO">Angola</option>{" "}
                    <option value="AIA">Anguilla</option>{" "}
                    <option value="ATA">Antarctica</option>{" "}
                    <option value="ATG">Antigua and Barbuda</option>{" "}
                    <option value="ARG">Argentina</option>{" "}
                    <option value="ARM">Armenia</option>{" "}
                    <option value="ABW">Aruba</option>{" "}
                    <option value="SHN">Ascension Island</option>{" "}
                    <option value="AUS">Australia</option>{" "}
                    <option value="AUT">Austria</option>{" "}
                    <option value="AZE">Azerbaijan</option>{" "}
                    <option value="BHR">Bahrain</option>{" "}
                    <option value="BGD">Bangladesh</option>{" "}
                    <option value="BRB">Barbados</option>{" "}
                    <option value="BLR">Belarus</option>{" "}
                    <option value="BEL">Belgium</option>{" "}
                    <option value="BLZ">Belize</option>{" "}
                    <option value="BEN">Benin</option>{" "}
                    <option value="BMU">Bermuda</option>{" "}
                    <option value="BTN">Bhutan</option>{" "}
                    <option value="BOL">Bolivia</option>{" "}
                    <option value="BES">Bonaire</option>{" "}
                    <option value="BIH">Bosnia and Herzegovina</option>{" "}
                    <option value="BWA">Botswana</option>{" "}
                    <option value="BVT">Bouvet Island</option>{" "}
                    <option value="BRA">Brazil</option>{" "}
                    <option value="CUW">Curaçao</option>{" "}
                    <option value="IOT">British Indian Ocean Territory</option>{" "}
                    <option value="VGB">British Virgin Islands</option>{" "}
                    <option value="BRN">Brunei</option>{" "}
                    <option value="BGR">Bulgaria</option>{" "}
                    <option value="BFA">Burkina Faso</option>{" "}
                    <option value="BDI">Burundi</option>{" "}
                    <option value="KHM">Cambodia</option>{" "}
                    <option value="CMR">Cameroon</option>{" "}
                    <option value="CAN">Canada</option>{" "}
                    <option value="CPV">Cape Verde</option>{" "}
                    <option value="CYM">Cayman Islands</option>{" "}
                    <option value="CAF">Central African Republic</option>{" "}
                    <option value="TCD">Chad</option>{" "}
                    <option value="CHL">Chile</option>{" "}
                    <option value="CHN">China</option>{" "}
                    <option value="CXR">Christmas Island</option>{" "}
                    <option value="CCK">
                      Cocos (Keeling) Islands (Australia)
                    </option>{" "}
                    <option value="COL">Colombia</option>{" "}
                    <option value="COM">Comoros</option>{" "}
                    <option value="COK">Cook Islands</option>{" "}
                    <option value="CRI">Costa Rica</option>{" "}
                    <option value="CIV">Cote D'ivoire</option>{" "}
                    <option value="HRV">Croatia</option>{" "}
                    <option value="CUB">Cuba</option>{" "}
                    <option value="CYP">Cyprus</option>{" "}
                    <option value="CZE">Czech Republic</option>{" "}
                    <option value="COD">
                      Democratic Republic of the Congo
                    </option>{" "}
                    <option value="DNK">Denmark</option>{" "}
                    <option value="DJI">Djibouti</option>{" "}
                    <option value="DMA">Dominica</option>{" "}
                    <option value="DOM">Dominican Republic</option>{" "}
                    <option value="TLS">East Timor</option>{" "}
                    <option value="ECU">Ecuador</option>{" "}
                    <option value="AFG">Afghanistan</option>{" "}
                    <option value="SLV">El Salvador</option>{" "}
                    <option value="GNQ">Equatorial Guinea</option>{" "}
                    <option value="ERI">Eritrea</option>{" "}
                    <option value="EST">Estonia</option>{" "}
                    <option value="ETH">Ethiopia</option>{" "}
                    <option value="FLK">Falkland Islands</option>{" "}
                    <option value="FRO">Faroe Islands</option>{" "}
                    <option value="FSM">Federated States of Micronesia</option>{" "}
                    <option value="FJI">Fiji</option>{" "}
                    <option value="FIN">Finland</option>{" "}
                    <option value="FRA">France</option>{" "}
                    <option value="GUF">French Guiana</option>{" "}
                    <option value="PYF">French Polynesia</option>{" "}
                    <option value="ATF">French Southern Territories</option>{" "}
                    <option value="GAB">Gabon</option>{" "}
                    <option value="GMB">Gambia</option>{" "}
                    <option value="GEO">Georgia</option>{" "}
                    <option value="DEU">Germany</option>{" "}
                    <option value="GHA">Ghana</option>{" "}
                    <option value="GIB">Gibraltar</option>{" "}
                    <option value="GRC">Greece</option>{" "}
                    <option value="GRL">Greenland</option>{" "}
                    <option value="GRD">Grenada</option>{" "}
                    <option value="GLP">Guadeloupe</option>{" "}
                    <option value="GUM">Guam</option>{" "}
                    <option value="GTM">Guatemala</option>{" "}
                    <option value="GGY">Guernsey</option>{" "}
                    <option value="GIN">Guinea</option>{" "}
                    <option value="GNB">Guinea-Bissau</option>{" "}
                    <option value="GUY">Guyana</option>{" "}
                    <option value="HTI">Haiti</option>{" "}
                    <option value="HMD">
                      Heard Island and McDonald Islands
                    </option>{" "}
                    <option value="HND">Honduras</option>{" "}
                    <option value="HKG">Hong Kong</option>{" "}
                    <option value="HUN">Hungary</option>{" "}
                    <option value="ISL">Iceland</option>{" "}
                    <option value="IND">India</option>{" "}
                    <option value="IDN">Indonesia</option>{" "}
                    <option value="IRN">Iran, Islamic Republic of</option>{" "}
                    <option value="IRQ">Iraq</option>{" "}
                    <option value="IRL">Ireland</option>{" "}
                    <option value="IMN">Isle of Man</option>{" "}
                    <option value="ISR">Israel</option>{" "}
                    <option value="ITA">Italy</option>{" "}
                    <option value="JAM">Jamaica</option>{" "}
                    <option value="JPN">Japan</option>{" "}
                    <option value="JEY">Jersey</option>{" "}
                    <option value="JOR">Jordan</option>{" "}
                    <option value="KAZ">Kazakhstan</option>{" "}
                    <option value="KEN">Kenya</option>{" "}
                    <option value="KIR">Kiribati</option>{" "}
                    <option value="PRK">
                      Korea, Democratic People's Republic of
                    </option>{" "}
                    <option value="KWT">Kuwait</option>{" "}
                    <option value="KGZ">Kyrgyzstan</option>{" "}
                    <option value="LAO">Laos</option>{" "}
                    <option value="LVA">Latvia</option>{" "}
                    <option value="LBN">Lebanon</option>{" "}
                    <option value="LSO">Lesotho</option>{" "}
                    <option value="LBR">Liberia</option>{" "}
                    <option value="LBY">Libya</option>{" "}
                    <option value="LIE">Liechtenstein</option>{" "}
                    <option value="LTU">Lithuania</option>{" "}
                    <option value="LUX">Luxembourg</option>{" "}
                    <option value="MAC">Macau</option>{" "}
                    <option value="MDG">Madagascar</option>{" "}
                    <option value="MWI">Malawi</option>{" "}
                    <option value="MYS">Malaysia</option>{" "}
                    <option value="MDV">Maldives</option>{" "}
                    <option value="MLI">Mali</option>{" "}
                    <option value="MLT">Malta</option>{" "}
                    <option value="MHL">Marshall Islands</option>{" "}
                    <option value="MTQ">Martinique</option>{" "}
                    <option value="MRT">Mauritania</option>{" "}
                    <option value="MUS">Mauritius</option>{" "}
                    <option value="MYT">Mayotte</option>{" "}
                    <option value="MEX">Mexico</option>{" "}
                    <option value="MDA">Moldova</option>{" "}
                    <option value="MCO">Monaco</option>{" "}
                    <option value="MNG">Mongolia</option>{" "}
                    <option value="MNE">Montenegro</option>{" "}
                    <option value="MSR">Montserrat</option>{" "}
                    <option value="MAR">Morocco</option>{" "}
                    <option value="MOZ">Mozambique</option>{" "}
                    <option value="MMR">Myanmar</option>{" "}
                    <option value="NAM">Namibia</option>{" "}
                    <option value="NRU">Nauru</option>{" "}
                    <option value="NPL">Nepal</option>{" "}
                    <option value="NLD">Netherlands</option>{" "}
                    <option value="NCL">New Caledonia</option>{" "}
                    <option value="NZL">New Zealand</option>{" "}
                    <option value="NIC">Nicaragua</option>{" "}
                    <option value="NER">Niger</option>{" "}
                    <option value="NGA">Nigeria</option>{" "}
                    <option value="NIU">Niue</option>{" "}
                    <option value="NFK">Norfolk Island</option>{" "}
                    <option value="MNP">Northern Mariana Islands</option>{" "}
                    <option value="NOR">Norway</option>{" "}
                    <option value="OMN">Oman</option>{" "}
                    <option value="PAK">Pakistan</option>{" "}
                    <option value="PLW">Palau</option>{" "}
                    <option value="PSE">Palestine, State of</option>{" "}
                    <option value="PAN">Panama</option>{" "}
                    <option value="PNG">Papua New Guinea</option>{" "}
                    <option value="PRY">Paraguay</option>{" "}
                    <option value="PER">Peru</option>{" "}
                    <option value="PHL">Philippines</option>{" "}
                    <option value="PCN">Pitcairn Islands</option>{" "}
                    <option value="POL">Poland</option>{" "}
                    <option value="PRT">Portugal</option>{" "}
                    <option value="PRI">Puerto Rico</option>{" "}
                    <option value="QAT">Qatar</option>{" "}
                    <option value="KOS">Republic of Kosovo</option>{" "}
                    <option value="XKX">Kosovo</option>{" "}
                    <option value="MKD">Republic of Macedonia</option>{" "}
                    <option value="COG">Republic of the Congo</option>{" "}
                    <option value="REU">Reunion</option>{" "}
                    <option value="ROU">Romania</option>{" "}
                    <option value="RUS">Russia</option>{" "}
                    <option value="RWA">Rwanda</option>{" "}
                    <option value="BLM">Saint Barthélemy</option>{" "}
                    <option value="KNA">Saint Kitts and Nevis</option>{" "}
                    <option value="LCA">Saint Lucia</option>{" "}
                    <option value="MAF">Saint Martin</option>{" "}
                    <option value="SPM">Saint Pierre and Miquelon</option>{" "}
                    <option value="VCT">
                      Saint Vincent and the Grenadines
                    </option>{" "}
                    <option value="WSM">Samoa</option>{" "}
                    <option value="SMR">San Marino</option>{" "}
                    <option value="STP">Sao Tome and Principe</option>{" "}
                    <option value="SAU">Saudi Arabia</option>{" "}
                    <option value="SEN">Senegal</option>{" "}
                    <option value="SRB">Serbia</option>{" "}
                    <option value="SYC">Seychelles</option>{" "}
                    <option value="SLE">Sierra Leone</option>{" "}
                    <option value="SGP">Singapore</option>{" "}
                    <option value="SXM">Sint Maarten</option>{" "}
                    <option value="SVK">Slovakia</option>{" "}
                    <option value="SVN">Slovenia</option>{" "}
                    <option value="SLB">Solomon Islands</option>{" "}
                    <option value="SOM">Somalia</option>{" "}
                    <option value="ZAF">South Africa</option>{" "}
                    <option value="SGS">South Georgia</option>{" "}
                    <option value="KOR">South Korea</option>{" "}
                    <option value="ESP">Spain</option>{" "}
                    <option value="LKA">Sri Lanka</option>{" "}
                    <option value="SDN">Sudan</option>{" "}
                    <option value="SSD">South Sudan</option>{" "}
                    <option value="SUR">Suriname</option>{" "}
                    <option value="SJM">Svalbard and Jan Mayen</option>{" "}
                    <option value="SWZ">Swaziland</option>{" "}
                    <option value="SWE">Sweden</option>{" "}
                    <option value="CHE">Switzerland</option>{" "}
                    <option value="SYR">Syrian Arab Republic</option>{" "}
                    <option value="TWN">Taiwan</option>{" "}
                    <option value="TJK">Tajikistan</option>{" "}
                    <option value="TZA">Tanzania</option>{" "}
                    <option value="THA">Thailand</option>{" "}
                    <option value="BHS">The Bahamas</option>{" "}
                    <option value="TGO">Togo</option>{" "}
                    <option value="TKL">Tokelau</option>{" "}
                    <option value="TON">Tonga</option>{" "}
                    <option value="TTO">Trinidad and Tobago</option>{" "}
                    <option value="TUN">Tunisia</option>{" "}
                    <option value="TUR">Turkey</option>{" "}
                    <option value="TKM">Turkmenistan</option>{" "}
                    <option value="TCA">Turks and Caicos Islands</option>{" "}
                    <option value="TUV">Tuvalu</option>{" "}
                    <option value="UGA">Uganda</option>{" "}
                    <option value="UKR">Ukraine</option>{" "}
                    <option value="ARE">United Arab Emirates</option>{" "}
                    <option value="GBR">United Kingdom</option>{" "}
                    <option value="USA">United States</option>{" "}
                    <option value="UMI">
                      United States Minor Outlying Islands
                    </option>{" "}
                    <option value="VIR">United States Virgin Islands</option>{" "}
                    <option value="URY">Uruguay</option>{" "}
                    <option value="UZB">Uzbekistan</option>{" "}
                    <option value="VUT">Vanuatu</option>{" "}
                    <option value="VAT">Vatican City</option>{" "}
                    <option value="VEN">Venezuela</option>{" "}
                    <option value="VNM">Vietnam</option>{" "}
                    <option value="WLF">Wallis and Futuna</option>{" "}
                    <option value="ESH">Western Sahara</option>{" "}
                    <option value="YEM">Yemen</option>{" "}
                    <option value="ZMB">Zambia</option>{" "}
                    <option value="ZWE">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="address">Home Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required="please Enter your Address ?"
                    className="form-control"
                    placeholder="address"
                  />
                </div>{" "}
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>{" "}
                {/*  */}
                <div className="form-group">
                  <label htmlFor="zip_postal_code">Zip/Postal Code</label>
                  <input
                    type="text"
                    id="Zip/Postal code "
                    name="phone"
                    required
                    className="form-control"
                    placeholder="zip_postal_code"
                  />
                </div>{" "}
                {/* Subscribe */}
                <div className="form-group profile-container-subscribe">
                  <div className="checkbox">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        id="unsubscribe"
                        name="unsubscribe"
                      />
                      <span className="checkbox-custom" />
                      &nbsp;
                      <span className="input-title">Keep me updated</span>
                    </label>
                  </div>
                </div>
                <div className="form-group profile-container-btn">
                  <button type="submit" className="btn btn-lg btn-danger">
                    <span>Save</span>
                    <i
                      className="bi bi-arrow-repeat fa-spin"
                      style={{
                        display: "none",
                        mask: 'url("https://static1.s123-cdn-static-a.com/ready_uploads/svg/spinner.svg?v=2")',
                        WebkitMask:
                          'url("https://static1.s123-cdn-static-a.com/ready_uploads/svg/spinner.svg?v=2")',
                      }}
                      data-ie11-classes="fa-spin"
                      alt="spinner"
                    >
                      &nbsp;
                    </i>
                  </button>
                </div>
              </div>
            </div>
            {/* <input type="hidden" name="w" defaultValue />
                  <input type="hidden" name="websiteID" defaultValue={5171355} />
                  <input type="hidden" id="profile_image" name="profile_image" defaultValue /> */}
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default AddNewAddress;
