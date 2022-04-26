import React from 'react'

function JoinOurTeam() {

   const JoinOurTeamContent={
      h3Header:"If you love what you do and are passionate about your work, PragetX is for you.",
      paragraph1:"Being a startup, we value the mental health of our employees the most, their work, and convenience. Therefore, we believe in keeping",
      paragraph2:"a cooperative and friendly work culture rather than putting the burden of rules on our employees.Interesting, right!",
      CTA:"Join Our Visionary Team"
   }
   
  return (
    <section className="are-you-startup-main">
    <div className="container-fluid">
       <div className="con-head text-center">
          <h3>{JoinOurTeamContent.h3Header}</h3>
          <p>{JoinOurTeamContent.paragraph1} <br/>{JoinOurTeamContent.paragraph2}</p>
          <a href="#" className="btn">{JoinOurTeamContent.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
       </div>
    </div>   
 </section>
  )
}

export default JoinOurTeam