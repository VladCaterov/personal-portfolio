import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { NgModule } from "@angular/core";

@NgModule({
    exports:[   
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatCardModule,
    ]
})
export class MaterialImports{}