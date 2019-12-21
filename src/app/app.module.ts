import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';


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
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { LegalNoticeComponent } from './components/footer/legal-notice/legal-notice.component';
import { Error404Component } from './components/error404/error404.component';

const ROUTES: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'packaging', component: PackagingComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'packaging/bottles', component: BottlesComponent},
  {path: 'packaging/boxes', component: BoxesComponent},
  {path: 'packaging/cardboardPack', component: CardboardPackComponent},
  {path: 'packaging/oliveOil', component: OliveOilComponent},
  {path: 'communication/leaflets', component: LeafletsComponent},
  {path: 'communication/logos', component: LogosComponent},
  {path: 'communication/POSDisplay', component: POSDisplayComponent},
  {path: 'communication/printAdvert', component: PrintAdvertComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer/legalNotice', component: LegalNoticeComponent},
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
    AboutMeComponent,
    ClientsComponent,
    ContactComponent,
    LegalNoticeComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    SidebarModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
