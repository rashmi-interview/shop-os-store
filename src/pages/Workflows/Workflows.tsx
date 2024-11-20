import Navigation from "../../componets/Navigation/Navigation"
import { PageContent } from "../PageContent/PageContent"
import { isMob } from "../../constants"
import PageTitle from "../PageTitle/PageTitle"
import { MobNavigation } from "../../componets/Navigation/MobNavigation"

function Workflows() {

  return (
    <>
      {isMob ? <MobNavigation /> : <Navigation />}
      <PageContent>
        <PageTitle>Workflows</PageTitle>
      </PageContent>
    </>
  )
}

export default Workflows
