import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgTerminalModule } from 'ng-terminal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FieldComponent } from './field/field.component';
import { TabulatorTablesComponent } from './tabulator-tables/tabulator-tables.component';
import { ActiveRoleParametersComponent } from './active-role-parameters/active-role-parameters.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RefboxComponent } from './refbox/refbox.component';
import { RotateParametersComponent } from './rotate-parameters/rotate-parameters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    HomeComponent,
    TabulatorTablesComponent,
    ActiveRoleParametersComponent,
    ConfigurationComponent,
    RefboxComponent,
    RotateParametersComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgTerminalModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatGridListModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
