import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeafletModule } from '../../../projects/ngx-leaflet/src/lib/leaflet.module';

import { LeafletDemoComponent } from './leaflet-demo.component';

import { LeafletMarkersDemoComponent } from './layers/markers-demo.component';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LeafletModule
	],
	declarations: [
		LeafletDemoComponent,
		LeafletMarkersDemoComponent,
	],
	exports: [
		LeafletDemoComponent
	],
	bootstrap: [ LeafletDemoComponent ],
	providers: [ ]
})
export class LeafletDemoModule { }
