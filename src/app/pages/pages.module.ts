import { NgModule } from '@angular/core';

import { NgaMenuModule, NgaSidebarModule, NgaThemeModule } from '@nga/theme';

import { menuItems } from './pages-menu';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MapsComponent } from './maps/maps.component';
import { ComponentsComponent } from './components/components.component';
import { ChartsComponent } from './charts/charts.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  MapsComponent,
  ComponentsComponent,
  ChartsComponent,
];

@NgModule({
  imports: [
    NgaThemeModule.forRoot({ name: 'gorgeous' }),
    NgaSidebarModule.forRoot(),
    NgaMenuModule.forRoot({ items: menuItems }),
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
