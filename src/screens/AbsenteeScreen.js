import React, { Component } from 'react'
import {Select, Button} from 'react-materialize'
export default class AbsenteeScreen extends Component {

    changeStateImage(){
        const images = require.context('../States', true);
        const websiteLinks = 
        {"Alabama" : "https://myinfo.alabamavotes.gov/VoterView/RegistrantSearch.do",
            "Alaska": "https://myvoterinformation.alaska.gov/",
            "Arizona": "https://my.arizona.vote/WhereToVote.aspx?s=individual",
            "Arkansas": "https://www.voterview.ar-nova.org/voterview",
            "California": "https://voterstatus.sos.ca.gov/",
            "Colorado": "https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml",
            "Connecticut": "https://portaldir.ct.gov/sots/lookup.aspx",
            "DistrictOfColumbia(DC)": "https://www.dcboe.org/Voters/Register-To-Vote/Check-Voter-Registration-Status",
            "Delaware": "https://ivote.de.gov/voterview",
            "Florida": "https://registration.elections.myflorida.com/CheckVoterStatus",
            "Georgia": "https://www.mvp.sos.ga.gov/MVP/mvp.do",
            "Hawaii": "https://olvr.hawaii.gov/",
            "Idaho": "https://apps.idahovotes.gov/YourPollingPlace/AmIRegistered.aspx",
            "Illinois": "https://ova.elections.il.gov/RegistrationLookup.aspx",
            "Indiana": "https://indianavoters.in.gov/",
            "Iowa": "https://sos.iowa.gov/elections/voterreg/regtovote/search.aspx",
            "Kansas": "https://myvoteinfo.voteks.org/VoterView/RegistrantSearch.do",
            "Kentucky": "https://vrsws.sos.ky.gov/vic/",
            "Louisiana": "https://voterportal.sos.la.gov/Home/VoterLogin",
            "Maine": "https://www1.maine.gov/portal/government/edemocracy/voter_lookup.php",
            "Maryland": "https://voterservices.elections.maryland.gov/VoterSearch",
            "Massachusetts": "https://www.sec.state.ma.us/voterregistrationsearch/myvoterregstatus.aspx",
            "Michigan": "https://mvic.sos.state.mi.us/",
            "Minnesota": "https://mnvotes.sos.state.mn.us/VoterStatus.aspx",
            "Mississippi": "https://www.msegov.com/sos/voter_registration/AmIRegistered",
            "Missouri": "https://s1.sos.mo.gov/elections/voterlookup/",
            "Montana": "https://app.mt.gov/voterinfo/",
            "Nebraska": "https://www.votercheck.necvr.ne.gov/VoterView/RegistrantSearch.do",
            "Nevada": "https://www.nvsos.gov/votersearch/",
            "NewHampshire": "https://app.sos.nh.gov/Public/PartyInfo.aspx",
            "NewJersey": "https://voter.svrs.nj.gov/registration-check",
            "NewMexico": "https://voterportal.servis.sos.state.nm.us/wheretovote.aspx?AspxAutoDetectCookieSupport=1",
            "NewYork": "https://form.jotform.com/201176971601149",
            "NorthCarolina": "https://vt.ncsbe.gov/RegLkup/",
            "NorthDakota": "https://vip.sos.nd.gov/WhereToVoteID.aspx?tab=VoterLookup&ptlPKID=7&ptlhPKID=51",
            "Ohio": "https://voterlookup.ohiosos.gov/voterlookup.aspx",
            "Oklahoma": "https://okvoterportal.okelections.us/",
            "Oregon": "https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do?lang=eng&source=SOS",
            "Pennsylvania": "https://www.pavoterservices.pa.gov/pages/voterregistrationstatus.aspx",
            "RhodeIsland": "https://vote.sos.ri.gov/Home/UpdateVoterRecord?ActiveFlag=0",
            "SouthCarolina":  "https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo",
            "SouthDakota": "https://vip.sdsos.gov/VIPLogin.aspx",
            "Tennessee": "https://tnmap.tn.gov/voterlookup/",
            "Texas": "https://teamrv-mvp.sos.texas.gov/MVP/mvp.do",
            "Utah": "https://votesearch.utah.gov/voter-search/search/search-by-address/how-and-where-can-i-vote",
            "Vermont": "https://mvp.vermont.gov/",
            "Virginia" : "https://vote.elections.virginia.gov/VoterInformation",
            "Washington" : "https://voter.votewa.gov/WhereToVote.aspx",
            "WestVirginia": "https://services.sos.wv.gov/Elections/Voter/AmIRegisteredToVote",
            "Wisconsin": "https://myvote.wi.gov/en-us/MyVoterInfo",
            "Wyoming": "http://soswy.state.wy.us/Elections/Docs/WYCountyClerks.pdf",
        };
        var stateSelector = document.getElementById("stateSelector");
        var stateImg = document.getElementById("stateImage");
        var linker = document.getElementById("goToStateWebsite");
        stateImg.src = images("./" + stateSelector.value + ".jpg");
        linker.href = websiteLinks[stateSelector.value];
    }

    render() {
        return (
            <div id = "voterStatusScreen">
            <Select
                id="stateSelector"
                multiple={false}
                onChange={(e)=>this.changeStateImage()}
                options={{
                    classes: '',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                }}
                value=""
                >
                <option
                    disabled
                    value=""
                >
                    Select your State
                </option>
                <option value="Alabama">
                    Alabama
                </option>
                <option value="Alaska">
                    Alaska
                </option>
                <option value="Arkansas">
                    Arkansas
                </option>
                <option value="California">
                    California
                </option>
                <option value="Colorado">
                    Colorado
                </option>
                <option value="Connecticut">
                    Connecticut
                </option>
                <option value="DistrictOfColumbia(DC)">
                    District of Columbia (DC)
                </option>
                <option value="Delaware">
                    Delaware
                </option>
                <option value="Florida">
                    Florida
                </option>
                <option value="Georgia">
                    Georgia
                </option>
                <option value="Hawaii">
                    Hawaii
                </option>
                <option value="Idaho">
                    Idaho
                </option>
                <option value="Idaho">
                    Idaho
                </option>
                <option value="Illinois">
                    Illinois
                </option>
                <option value="Indiana">
                    Indiana
                </option>
                <option value="Iowa">
                    Iowa
                </option>
                <option value="Kansas">
                    Kansas
                </option>
                <option value="Kentucky">
                    Kentucky
                </option>
                <option value="Louisiana">
                    Louisiana
                </option>
                <option value="Maine">
                    Maine
                </option>
                <option value="Maryland">
                    Maryland
                </option>
                <option value="Massachusets">
                    Massachusets
                </option>
                <option value="Michigan">
                    Michigan
                </option>
                <option value="Minnesota">
                    Minnesota
                </option>
                <option value="Mississippi">
                    Mississippi
                </option>
                <option value="Missouri">
                    Missouri
                </option>
                <option value="Montana">
                    Montana
                </option>
                <option value="Nebraska">
                    Nebraska
                </option>
                <option value="Nevada">
                    Nevada
                </option>
                <option value="NewHampshire">
                    New Hampshire
                </option>
                <option value="NewJersey">
                    New Jersey
                </option>
                <option value="NewMexico">
                    New Mexico
                </option>
                <option value="NewYork">
                    New York
                </option>
                <option value="NorthCarolina">
                    North Carolina
                </option>
                <option value="NorthDakota">
                    North Dakota
                </option>
                <option value="Ohio">
                    Ohio
                </option>
                <option value="Oklahoma">
                    Oklahoma
                </option>
                <option value="Oregon">
                    Oregon
                </option>
                <option value="Pennsylvania">
                    Pennsylvania
                </option>
                <option value="RhodeIsland">
                    Rhode Island
                </option>
                <option value="SouthCarolina">
                    South Carolina
                </option>
                <option value="SouthDakota">
                    South Dakota
                </option>
                <option value="Tennessee">
                    Tennessee
                </option>
                <option value="Texas">
                    Texas
                </option>
                <option value="Utah">
                    Utah
                </option>
                <option value="Vermont">
                    Vermont
                </option>
                <option value="Virginia">
                    Virginia
                </option>
                <option value="Washington">
                    Washington
                </option>
                <option value="WestVirginia">
                    West Virginia
                </option>
                <option value="Wisconsin">
                    Wisconsin
                </option>
                <option value="Wyoming">
                    Wyoming
                </option>
                </Select>
                <div><img id ="stateImage"></img></div>
                <div><a id = "goToStateWebsite" target ="_blank"><Button className = "submitButton">Get Your Absentee Ballot!</Button></a></div>
            </div>
        )
    }
}
