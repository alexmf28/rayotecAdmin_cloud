import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AlmacenModule } from './almacen/almacen.module';
import { ProveedoresModule } from './proveedores/proveedores.module';

import { environment } from '../environments/environment';
import { ReparacionesModule } from './reparaciones/reparaciones.module';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AuthModule,
    HomeModule,
    AlmacenModule,
    ProveedoresModule,
    ReparacionesModule,
    VentasModule,
    SharedModule,
    

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
