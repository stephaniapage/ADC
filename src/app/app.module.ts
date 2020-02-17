import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import { DatePipe } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';


//Components:

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PackagingComponent } from './components/packaging/packaging.component';
import { NavComponent } from './components/header/nav/nav.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { BottlesComponent } from './components/packaging/bottles/bottles.component';
import { BoxesComponent } from './components/packaging/boxes/boxes.component';
import { CardboardPackComponent } from './components/packaging/cardboard-pack/cardboard-pack.component';
import { OliveOilComponent } from './components/packaging/olive-oil/olive-oil.component';
import { LeafletsComponent } from './components/communication/leaflets/leaflets.component';
import { LogosComponent } from './components/communication/logos/logos.component';
import { POSDisplayComponent } from './components/communication/posdisplay/posdisplay.component';
import { PrintAdvertComponent } from './components/communication/print-advert/print-advert.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { Error404Component } from './components/error404/error404.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AlexandraComponent } from './components/alexandra/alexandra.component';
import { EditSalonComponent } from './edit-salon/edit-salon.component';
import { AuthComponent } from './components/auth/auth.component';

const ROUTES: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'packaging', component: PackagingComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'packaging/bouteilles', component: BottlesComponent},
  {path: 'packaging/bibs', component: BoxesComponent},
  {path: 'packaging/cartons', component: CardboardPackComponent},
  {path: 'packaging/huiledolive', component: OliveOilComponent},
  {path: 'communication/plaquettes', component: LeafletsComponent},
  {path: 'communication/logos', component: LogosComponent},
  {path: 'communication/PLV', component: POSDisplayComponent},
  {path: 'communication/pubs', component: PrintAdvertComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'mentionslegales', component: LegalNoticeComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'alexandra', component: AlexandraComponent},
  {path: 'alexandra/edit_salon/:id', component: EditSalonComponent, pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: '**', component: Error404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PackagingComponent,
    NavComponent,
    CommunicationComponent,
    BottlesComponent,
    BoxesComponent,
    CardboardPackComponent,
    OliveOilComponent,
    LeafletsComponent,
    LogosComponent,
    POSDisplayComponent,
    PrintAdvertComponent,
    ClientsComponent,
    ContactComponent,
    LegalNoticeComponent,
    Error404Component,
    AgendaComponent,
    AlexandraComponent,
    EditSalonComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    LightboxModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, Title, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
