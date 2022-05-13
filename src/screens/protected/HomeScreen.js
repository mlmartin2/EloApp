import LeadCard from "../../components/dnd/LeadCard";
import LeadCardContainer from "../../components/dnd/LeadCardContainer";

export default function Home()
{
    return (
        <>
        <header>
            PROTECTED
        </header>
        <body style={{paddingLeft:'30%', paddingRight:'30%'}}>
          <LeadCardContainer>
            <LeadCard/>
          </LeadCardContainer>
          <LeadCardContainer />
          <LeadCardContainer />
        </body>
        </>
    )
}