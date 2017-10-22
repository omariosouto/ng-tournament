import { RouterModule, Routes } from '@angular/router'

// Pages
import { CompetidorCadastroComponent, CompetidorListagemComponent } from './pages'

const AppRoutes: Routes = [
  {path:'', component: CompetidorListagemComponent },
  {path:'cadastro', component: CompetidorCadastroComponent }
]

export const routing = RouterModule.forRoot(AppRoutes)
