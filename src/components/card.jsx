import React from "react";

function Card({football}) {
    console.log(football.CupName);
    return (
        
       <div>
        {
           football.map((foot,id)=>
            <div key={id} className="football_card">
            <h1 className="cup_name">{foot.CupName}</h1>
            <p>Location: {foot.Location}</p>
            <p>Team: {foot.Team}</p>
            <p className ="fev_team">Fevorite Team: {foot.FevoriteTeam}</p>
            <p>Fevorite Player: {foot.FevoritePlayer}</p>
        </div>
        )
    }
       </div>
        
    
    );
}

export default Card;