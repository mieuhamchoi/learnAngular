import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // form để binding data
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// các compenent do mình tự tạo
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormatVNDPipe } from './pipes/format-vnd.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FormatVNDPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
