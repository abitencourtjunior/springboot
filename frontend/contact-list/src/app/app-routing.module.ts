import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component'
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [

  {
      path: 'contacts',
      component: ContactComponent,
      data: { title: 'Lista de Contatos' }
    },
    {
      path: 'contact-detail/:id',
      component: ContactDetailComponent,
      data: { title: 'Detalhe de Contato' }
    },
    {
      path: 'contact-new',
      component: ContactNewComponent,
      data: { title: 'Adicionar Contato' }
    },
    {
      path: 'contact-edit/:id',
      component: ContactEditComponent,
      data: { title: 'Editar o Contato' }
    },
    { path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
